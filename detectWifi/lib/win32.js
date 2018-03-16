// Generated by CoffeeScript 1.10.0
(function() {
  var connectionStateMap, fs, parsePatterns, win32WirelessProfileBuilder;

  fs = require('fs');

  parsePatterns = {
    netsh_line: new RegExp(/([^:]+): (.+)/)
  };

  connectionStateMap = {
    connected: "connected",
    disconnected: "disconnected",
    associating: "connecting"
  };

  win32WirelessProfileBuilder = function(ssid, security, key) {
    var profile_content;
    if (security == null) {
      security = false;
    }
    if (key == null) {
      key = null;
    }
    profile_content = "<?xml version=\"1.0\"?> <WLANProfile xmlns=\"http://www.microsoft.com/networking/WLAN/profile/v1\"> <name>" + ssid.plaintext + "</name> <SSIDConfig> <SSID> <hex>" + ssid.hex + "</hex> <name>" + ssid.plaintext + "</name> </SSID> </SSIDConfig>";
    switch (security) {
      case "wpa":
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>auto</connectionMode> <autoSwitch>true</autoSwitch> <MSM> <security> <authEncryption> <authentication>WPAPSK</authentication> <encryption>TKIP</encryption> <useOneX>false</useOneX> </authEncryption> <sharedKey> <keyType>passPhrase</keyType> <protected>false</protected> <keyMaterial>" + key + "</keyMaterial> </sharedKey> </security> </MSM>";
        break;
      case "wpa2":
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>auto</connectionMode> <autoSwitch>true</autoSwitch> <MSM> <security> <authEncryption> <authentication>WPA2PSK</authentication> <encryption>AES</encryption> <useOneX>false</useOneX> </authEncryption> <sharedKey> <keyType>passPhrase</keyType> <protected>false</protected> <keyMaterial>" + key + "</keyMaterial> </sharedKey> </security> </MSM>";
        break;
      default:
        profile_content += "<connectionType>ESS</connectionType> <connectionMode>manual</connectionMode> <MSM> <security> <authEncryption> <authentication>open</authentication> <encryption>none</encryption> <useOneX>false</useOneX> </authEncryption> </security> </MSM>";
    }
    profile_content += "</WLANProfile>";
    return profile_content;
  };

  module.exports = {
    autoFindInterface: function() {
      var _iface, _interface, _msg, findInterfaceCom;
      this.WiFiLog("Host machine is Windows.");
      findInterfaceCom = "echo wlan";
      this.WiFiLog("Executing: " + findInterfaceCom);
      _interface = this.execSync(findInterfaceCom);
      if (_interface) {
        _iface = _interface.trim();
        _msg = "Automatically located wireless interface " + _iface + ".";
        this.WiFiLog(_msg);
        return {
          success: true,
          msg: _msg,
          "interface": _iface
        };
      } else {
        _msg = "Error: No network interface found.";
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg,
          "interface": null
        };
      }
    },
    getIfaceState: function() {
      var KEY, VALUE, connectionData, error, error1, interfaceState, j, k, len, ln, ln_trim, parsedLine, ref;
      interfaceState = {};
      connectionData = this.execSync("netsh " + this.WiFiControlSettings.iface + " show interface");
      ref = connectionData.split('\n');
      for (k = j = 0, len = ref.length; j < len; k = ++j) {
        ln = ref[k];
        try {
          ln_trim = ln.trim();
          if (ln_trim === "Software Off") {
            interfaceState = {
              ssid: null,
              connected: false,
              power: false
            };
            break;
          } else {
            parsedLine = parsePatterns.netsh_line.exec(ln_trim);
            KEY = parsedLine[1].trim();
            VALUE = parsedLine[2].trim();
          }
        } catch (error1) {
          error = error1;
          continue;
        }
        interfaceState.power = true;
        switch (KEY) {
          case "State":
            interfaceState.connection = connectionStateMap[VALUE];
            break;
          case "SSID":
            interfaceState.ssid = VALUE;
            break;
          case "Radio status":
            if (VALUE === "Hardware Off") {
              interfaceState = {
                ssid: null,
                connected: false,
                power: false
              };
              break;
            }
        }
        if (KEY === "SSID") {
          break;
        }
      }
      return interfaceState;
    },
    connectToAP: function(_ap) {
      var COMMANDS, _msg, com, connectToAPChain, error, error1, error2, i, j, l, len, ref, ssid, stdout, xmlContent;
      this.WiFiLog("Generating win32 wireless profile...");
      ssid = {
        plaintext: _ap.ssid,
        hex: ""
      };
      for (i = j = 0, ref = ssid.plaintext.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        ssid.hex += ssid.plaintext.charCodeAt(i).toString(16);
      }
      xmlContent = null;
      if (_ap.password.length) {
        xmlContent = win32WirelessProfileBuilder(ssid, "wpa2", _ap.password);
      } else {
        xmlContent = win32WirelessProfileBuilder(ssid);
      }
      try {
        fs.writeFileSync(_ap.ssid + ".xml", xmlContent);
      } catch (error1) {
        error = error1;
        _msg = "Encountered an error connecting to AP: " + error;
        this.WiFiLog(_msg, true);
        return {
          success: false,
          msg: _msg
        };
      }
      COMMANDS = {
        loadProfile: "netsh " + this.WiFiControlSettings.iface + " add profile filename=\"" + _ap.ssid + ".xml\"",
        connect: "netsh " + this.WiFiControlSettings.iface + " connect ssid=\"" + _ap.ssid + "\" name=\"" + _ap.ssid + "\""
      };
      connectToAPChain = ["loadProfile", "connect"];
      for (l = 0, len = connectToAPChain.length; l < len; l++) {
        com = connectToAPChain[l];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        try {
          stdout = this.execSync(COMMANDS[com]);
        } catch (error2) {
          error = error2;
        }
        this.WiFiLog("Success!");
      }
      this.WiFiLog("Removing temporary WiFi config file...");
      return this.execSync("del \".\\" + _ap.ssid + ".xml\"");
    },
    resetWiFi: function() {
      var COMMANDS, _msg, com, j, len, resetWiFiChain, results, stdout;
      COMMANDS = {
        disconnect: "netsh " + this.WiFiControlSettings.iface + " disconnect"
      };
      resetWiFiChain = ["disconnect"];
      results = [];
      for (j = 0, len = resetWiFiChain.length; j < len; j++) {
        com = resetWiFiChain[j];
        this.WiFiLog("Executing:\t" + COMMANDS[com]);
        stdout = this.execSync(COMMANDS[com]);
        _msg = "Success!";
        results.push(this.WiFiLog(_msg));
      }
      return results;
    }
  };

}).call(this);
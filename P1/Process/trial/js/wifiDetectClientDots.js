$(document).ready(function(){
	var data = {},
		id = {},
		signal = {},
		address = {},
		flag = {},
		fontSize = {},
		fontColor,
		wifiSignalsWidth;

	var root10 = function(a){
		var b = (Math.pow(a , 4.5)/2000000);
		return b;
	}

	$.get("http://localhost:8081/getwifis", function(data){
		console.log(data[0]);
		for(i = 0; i<data.length;i++){
			id[i] = data[i].ssid;
			signal[i] = -parseInt(data[i].signal_level);
			address[i] = data[i].mac;
			flag[i] = data[i].security;
			fontSize[i] = root10(signal[i]);

		/*$("#container").append(data[i].ssid+" "+data[i].signal_level+", ");*/
			$("#container").append("<div id = 'wifi"+i+"' class = 'wifiSignals "+flag[i]+"'><h1 class = 'id'>"+id[i]+"</h1></div>");
			$("#wifi"+i).append("<h1 class = 'signal'>"+signal[i]+"</h1>");
			/*$("#wifi"+i).find("h1").css("font-size", fontSize[i]);*/
			wifiSignalsWidth = (Math.floor(Math.sqrt(signal[i]))+1)*54;
			$("#wifi"+i).css("width",wifiSignalsWidth);
			for(j=0;j<signal[i];j++){
				$("#wifi"+i).append("<div class = 'dot'></div>");
			}
			
		}

	});


	
});
$(document).ready(function(){
	var data = {},
		id = {},
		signal = {},
		address = {},
		flag = {},
		fontSize = {},
		fontColor,
		position = {},
		wW = $(window).width(),
		wH = $(window).height();
	
	var root10 = function(a){
		var b = (Math.pow(a , 4.5)/2000000);
		return b;
	}

	$.get("http://localhost:8081/getwifis", function(data){
		for(i = 0; i<data.length;i++){
			id[i] = data[i].ssid;
			signal[i] = -parseInt(data[i].signal_level);
			address[i] = data[i].mac;
			flag[i] = data[i].security;
			fontSize[i] = root10(signal[i]);
			fontColor = "#"+address[i].slice(9,11)+address[i].slice(12,14)+address[i].slice(15,17);
			console.log(address[i]);
			console.log(fontColor);


		/*$("#container").append(data[i].ssid+" "+data[i].signal_level+", ");*/
			$("#container").append("<div id = 'wifi"+i+"' class = 'wifiSignals'><h1 class = 'id "+flag[i]+"'>"+id[i]+"</h1></div>");
			/*$("#wifi"+i).append("<h1 class = 'signal'>"+signal[i]+"</h1>");*/
			position[0] = Math.random()*wW;
			position[1] = Math.random()*wH;
			$("#wifi"+i).css({"top":position[0],"left":position[1]});
			$("#wifi"+i).find("h1").css({"font-size": fontSize[i],"color": fontColor});
			
		}

	});


	
});
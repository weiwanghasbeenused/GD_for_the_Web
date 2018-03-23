$(document).ready(function(){
	var data = {},
		id = {},
		signal = {},
		address = {},
		flag = {},
		fontSize = {},
		fontColor,
		r,
		wW = $(window).width(),
		wH = $(window).height(),
		positionY = 0;
	
	var root10 = function(a){
		var b = (Math.pow(a , 4.5)/500000);
		return b;
	}

	$.get("http://localhost:8081/getwifis", function(data){
		var position = new Array(data.length);

		for(i = 0; i<data.length;i++){
			id[i] = data[i].ssid;
			signal[i] = -parseInt(data[i].signal_level);
			address[i] = data[i].mac;
			flag[i] = data[i].security;
			r = root10(signal[i])+"px";
			fontColor = "#"+address[i].slice(9,11)+address[i].slice(12,14)+address[i].slice(15,17);
			console.log(address[i]);
			console.log(fontColor);
			position[i] = new Array(2);
			position[i][0] = (i % 5)*wW/5;
			position[i][1] = (parseInt(i/5))*wW/5;
			console.log(position[i][0]+","+position[i][1]);

		/*$("#container").append(data[i].ssid+" "+data[i].signal_level+", ");*/
			$("#container").append("<div id = 'wifi"+i+"' class = 'wifiSignals circle'><h1 class = 'id "+flag[i]+"'>"+id[i]+"</h1></div>");
			/*$("#wifi"+i).append("<h1 class = 'signal'>"+signal[i]+"</h1>");*/
			$("#wifi"+i).css(
				{"top":position[i][1],"left":position[i][0],"height":r,"width":r,"background-color":fontColor}
				);

			
		}

	});


	
});
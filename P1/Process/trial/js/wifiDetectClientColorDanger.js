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
		var b = (Math.pow(a , 4.5)/4000000);
		return b;
	}

	$.get("http://localhost:8081/getwifis", function(data){
		for(i = 0; i<data.length;i++){
			id[i] = data[i].ssid;
			signal[i] = -parseInt(data[i].signal_level);
			address[i] = data[i].mac;
			flag[i] = data[i].security;
			fontSize[i] = root10(signal[i]);
		/*$("#container").append(data[i].ssid+" "+data[i].signal_level+", ");*/
			$("#container").append(
				"<div id = 'wifi"+i+"' class = 'wifiSignals'><h1 class = 'id "+flag[i]+"'>"+id[i]+"</h1><h2 class = 'info'>security level = "+flag[i]+"</h2></div>");
			/*$("#wifi"+i).append("<h1 class = 'signal'>"+signal[i]+"</h1>");*/
			$("#wifi"+i).find("h1").css({"font-size": fontSize[i],"color": fontColor});
			position[0] = Math.random()*(wW-$("#wifi"+i).width());
			position[1] = Math.random()*(wH-$("#wifi"+i).height());
			$("#wifi"+i).css({"top":position[1],"left":position[0]});
			
		}
		$(".wifiSignals").hover(function(){
			$(this).find(".info").css("opacity","1");
		},function(){
			$(this).find(".info").css("opacity","0");
		});

	});
	$("#intro").hover(function(){
		$(this).stop().animate({
			right:"0"
		},300);
	},function(){
		$(this).stop().animate({
			right:"-620"
		},300);
	});

	


	
});
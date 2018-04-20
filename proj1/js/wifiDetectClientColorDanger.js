$(document).ready(function(){
	var data = {},
		id = {},
		signal = {},
		address = {},
		flag = {},
		fontSize = {},
		fontColor,
		position = {};
		s = 0,
		s2 = 1,
		wW = $(window).width(),
		wH = $(window).height();

	var root10 = function(a){
		var b = (Math.pow(a , 2)/30);
		return b;
	}

	$.get("http://localhost:8081/getwifis", function(data){
		var position = new Array(data.length);
		for(i = 0; i<data.length;i++){
			id[i] = data[i].ssid;
			signal[i] = 100+parseInt(data[i].signal_level);
			address[i] = data[i].mac;
			flag[i] = data[i].security;
			fontSize[i] = root10(signal[i]);
		/*$("#container").append(data[i].ssid+" "+data[i].signal_level+", ");*/
			$("#container").append(
				"<div id = 'wifi"+i+"' class = 'wifiSignals'><h1 class = 'id "+flag[i]+"'>"+id[i]+"</h1><h2 class = 'info'>security level = "+flag[i]+"</h2></div>");
			/*$("#wifi"+i).append("<h1 class = 'signal'>"+signal[i]+"</h1>");*/
			$("#wifi"+i).find("h1").css({"font-size": fontSize[i],"color": fontColor});
			position[i] = new Array(2);
			position[i][0] = Math.random()*(wW-$("#wifi"+i).width());
			position[i][1] = Math.random()*(wH-$("#wifi"+i).height());
			$("#wifi"+i).css({"top":position[i][1],"left":position[i][0]});
			
		}
		$(".wifiSignals").hover(function(){
			$(this).find(".info").css("opacity","1");
		},function(){
			$(this).find(".info").css("opacity","0");
		});
		$("#switch").click(function(){
		if(s == 0){
			$(".wifiSignals").css({"position":"relative","top":"0","left":"0"});
			s=1;
			console.log(s);
		}else{
			$(".wifiSignals").css("position","absolute");
			for(j=0;j<data.length;j++){
				$("#wifi"+j).css({"top":position[j][1],"left":position[j][0]});
			}
			s=0;
			console.log(s);
		}
	});

	});
	$("#trigger").click(function(){
		if(s2==0){
			$("#intro").stop().fadeIn(200);
			s2 = 1; 
		}else{
			$("#intro").hide();
			s2 = 0;
		}
	});
	

	


	
});
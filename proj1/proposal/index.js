$(document).ready(function(){
	var k = 0;
	console.log(k);

	setTimeout(function(){ $("#1-1").show(); }, 500);
	setTimeout(function(){ $("#1-2").show(); }, 1500);
	setTimeout(function(){ $("#1-3").show(); }, 2500);
	$("body").mouseleave(function(){
		if(event.clientY < 100 && event.clientX > 1000){
		k = 1;
		console.log(k);
		}
	});
	$(".center").mouseover(function(){
		if (k==1){
			
			$("#2-1").show();
			setTimeout(function(){ $("#2-2").show(); }, 1000);
		}
	});

});

// replace images when the page loads
/*$('img').attr('src', 'https://i.imgur.com/8QMMdNv.jpg');*/

// replace text in the page when it loads
/*$('body').children().each(function () {
	// replace the '@' sign with a '$' sign
	$(this).html( $(this).html().replace(/@/g,'$') );
});*/

// when you click on an image hide it using CSS
/*$('img').click(function() {
	$(this).addClass('hide');
});*/

// when you click on the page 'body' apply .gradient to it from the CSS
/*$('body').click(function() {
	$(this).addClass('gradient');
});*/
/*$('a').attr('href', "https://www.youtube.com/watch?v=eh7lp9umG2I");*/
$(document).ready(function(){
	var http = "https://www.nytimes.com/video/world/middleeast/100000005843862/endure-aerial-attack-syria.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=photo-spot-region&region=top-news&WT.nav=top-news";
var text = ["What", "It’s", "Like", "to", "Endure", "Aerial", "Attacks"];
var text2 = ["Wait?", "Run?", "Views", "From", "Below", "an", "Airstrike"];
var steps = 0;
var subText = function(i){
	$(".pinWrapper:not(.skip)").addClass("skip").append("<div class = 'add'><h2>"+text[i]+"</h2></div>");
	/*$("._6d").empty();*/
	console.log("step"+i);
}
subText(steps);
$(window).scroll(function(){
	if(steps==6){
		$(".pinWrapper:not(.skip)").empty().addClass("skip").append("<div class = 'add'><h2><a href = '"+http+"'>"+text[steps]+"</a></h2></div>");
	}else{
		subText(steps);
	}
	$(".CloseupContent:not(.skip)").addClass("skip").append("<div class='add2'><h1>"+text[steps-1]+"</h1></div>");


});

$("body").click(function(){
	steps = steps+1;
	console.log("click!");
	subText(steps);
	
});
});


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
	console.log("Extension2 is on");
	var poetry = [];
	poetry[0] = ["It’s", "not", "that", "the", "old", "are", "wise."];
	poetry[1] = ["But", "that", "we", "thirst", "for", "the", "wisdom."];
	poetry[2] = ["we", "had", "at", "twenty."];
	poetry[3] = ["when", "we", "understood", "everything."];
	poetry[4] = ["when", "our", "brains", "bubbled."];
	poetry[5] = ["with", "tingling", "insights."];
	poetry[6] = ["percolating", "up", "from."];
	poetry[7] = ["our", "brilliant", "genitals."];
	poetry[8] = ["when", "our", "music", "rang", "like", "a", "global", "siege."];
	poetry[9] = ["shooting", "down", "all", "the", "lies", "in", "the", "world."];
	poetry[10] = ["oh", "then", "we", "knew", "the", "truth."];
	poetry[11] = ["then", "we", "sparkled", "like", "mica", "in", "granite."];
	poetry[12] = ["and", "now", "we", "stand", "on", "the", "shore."];
	poetry[13] = ["of", "an", "ocean", "that", "rises", "and", "rises."];
	poetry[14] = ["but", "is", "too", "salt", "to", "drink."];
	console.log(poetry);
	var steps = 0;
	var text = [];
	for(i=0;i<poetry.length;i++){
		text[i] = poetry[i][0];
		console.log(poetry[i][0]);
	}
	console.log(text);
	for(i=0;i<text.length;i++){
		$(".pinWrapper:nth-of-type("+(i+1)+")").append("<div class = 'add'><h2>"+text[i]+"</h2></div>");
		console.log(text[i]);
	}
	
});
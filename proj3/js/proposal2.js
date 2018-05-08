	var word,
		story,
		task = 0;//...
	
	function saveWord() {
    	word = document.getElementById("inputBox").value;
    	console.log(word);
    }
    function saveStory() {
    	story = document.getElementById("inputBox").value;
    	console.log(story);
    	var go = "#"+word.slice(0,1);
    	console.log(word);
    	console.log(go);
    	$(go).append(word);


    }
    function input(){
    	if(task == 0){
    		saveWord();
    		task = 1;
    		$("#instruction").empty().append("Why did you choose the word?");
    		document.getElementById("inputBox").reset();

    	}else if(task == 1){
    		saveStory();
    		$("#inputContainer").fadeOut(200);
    	}
    }
    /*$("#submitBtn").click(function(){
    	if(task == 0){
    		saveWord();
    		task = 1;
    		$("#instruction").empty().append("Why did you choose the word?");
    	}else if(task == 1){
    		saveStory();
    		$("#inputContainer").fadeOut(200);
    	}
    	
    });*/
    $(document).ready(function(){
    	var ss = document.getElementById("submitBtn");
    	ss.addEventListener("click", input, false);
    });
	


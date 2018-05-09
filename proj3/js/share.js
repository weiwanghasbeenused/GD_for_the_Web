 $(document).ready(function(){
   
    var word,
        story,
        task = 0,
        introCounter = 0;//...
    
    var reset = function(){
        introCounter = 0;
        $("#intro").hide();
        $("body").removeClass("over");
    }
    console.log("yaya");
    $("#introBtn").click(function(){
        console.log("yaya");
        if(introCounter == 0){
            introCounter = 1;
            $("#intro").fadeIn(200);
            $("body").addClass("over");     
        }else{
            reset();
        }
        
    });
    $("body").click(function(){
        console.log("hihi");
    });

    function saveWord() {
        word = document.getElementById("inputBox").value;
        console.log(word);
        var go = "#"+word.slice(0,1);
        console.log(word);
        console.log(go);
        $(go).append(word);
    }
    /*function saveStory() {
        story = document.getElementById("inputBox").value;
        console.log(story);
        var go = "#"+word.slice(0,1);
        console.log(word);
        console.log(go);
        $(go).append(word);
    }*/
    function input(){
        if(task == 0){
            saveWord();
            task = 1;
            $("#inputBox").empty();

        }
    }
    $(document).ready(function(){
        var ss = document.getElementById("submitBtn");
        ss.addEventListener("click", input, false);
    });

});

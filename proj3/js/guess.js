 $(document).ready(function(){
    $.ajax({
            url : "guess.txt",
            dataType: "text",
            success : function (data) {
                var pw = "<h1>"+data+"</h1>";
                $("#list").append(pw);
                console.log(data);
            }
        });

    var word,
        story,
        task = 0,
        introCounter = 1,
        data = [];//...
        
    
    var resetIntro = function(){
        introCounter = 0;
        $("#intro").stop().hide();
        $("#cover").stop().hide();
    }
    $("#introBtn").click(function(){
        if(introCounter == 0){
            introCounter = 1;
            console.log(introCounter);
            $("#intro").stop().fadeIn(200);
            $("#cover").stop().show();
        }else{
            resetIntro();
            console.log(introCounter);
        }
        
    });
    $("#cover").click(function(){
        if(introCounter == 1){
            resetIntro();
        }
    });

    /*var pageExecute = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        console.log("init!");
        $.ajax({
            url: "guess.txt",
            async: false,
            success: function (data){
                pageExecute.fileContents = data;
                $("#list").append(data);
                console.log(data)
            }
        });
    }
    };
    pageExecute.init();*/
    /*$("#submitBtn").on('submit', function(e){
        e.preventDefault();
        var word2 = document.getElementById("inputBox").value;
        $.ajax({
            type: "POST",
            url: "guess.php",
            data: word2,
            success: function(data) {
            $("#instruction").empty().append("Thank you! One more try?&nbsp;&nbsp;");
            console.log(data+"sent");
            }
        });
    });*/

    /*function saveWord() {
        word = document.getElementById("inputBox").value;
        console.log(word);
        var finalString = "<h1>"+word+"</h1>"
        
        localStorage["data"] = JSON.stringify(finalString || null );
        console.log(localStorage["data"]);
    }*/
    /*function saveStory() {
        story = document.getElementById("inputBox").value;
        console.log(story);
        var go = "#"+word.slice(0,1);
        console.log(word);
        console.log(go);
        $(go).append(word);
    }*/
    /*function input(){
            saveWord();
            task = 1;
            $("#inputBox").empty();
            $("#instruction").empty().append("Thank you! One more time?&nbsp;&nbsp;");

    }*/
    /*$(document).ready(function(){
        var ss = document.getElementById("submitBtn");
        ss.addEventListener("click", input, false);
    });*/
    
});

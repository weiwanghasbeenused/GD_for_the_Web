 $(document).ready(function(){
    $.ajax({
            url : "guess.txt",
            success : function (data) {
                console.log(data),
                dataType: "text",
                $("#list").html(data);
            }
        });

    var word,
        story,
        task = 0,
        introCounter = 0,
        data = [];//...
        
    
    var reset = function(){
        introCounter = 0;
        $("#intro").hide();
        $("body").removeClass("over");
    }
    console.log("cc");
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
    var pageExecute = {

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
    pageExecute.init();
    

    function saveWord() {
        word = document.getElementById("inputBox").value;
        console.log(word);
        var finalString = "<h1>"+word+"</h1>"
        /*$("#list").append(finalString);*/
        localStorage["data"] = JSON.stringify(finalString || null );
        console.log(localStorage["data"]);
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
            saveWord();
            task = 1;
            $("#inputBox").empty();
            $("#instruction").empty().append("Thank you! One more time?&nbsp;&nbsp;");

    }
    $(document).ready(function(){
        var ss = document.getElementById("submitBtn");
        ss.addEventListener("click", input, false);
    });
    
});

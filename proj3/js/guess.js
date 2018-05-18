 $(document).ready(function(){
    //var symbols = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","/","'",'"',"?",":",";","[","]","{","}","|",">","<",",",".","~","`","–","|"];
    var score = [];
    var StrI = function(a){
        var s = 0;
        var l = a.length;
        var saveB;/W3Schools/
        var sgt;
        var hasS = !Boolean(/^[a-z1-9]+$/i.test(a));
        var hasU = !Boolean(a === a.toLowerCase());
        var hasL = !Boolean(a === a.toUpperCase());
        var hasN = Boolean(/[0-9]/.test(a));
        console.log("+++++"+a+"has");
        if(hasS){
            s = s+5;
            console.log("S");
        }
        if(hasU){
            s=s+5;
            console.log("U");
        }
        if(hasL){
            s=s+5;
            console.log("L");
        }
        if(hasN){
            s=s+5;
            console.log("N");
        }
        if(hasS&&hasU){
            s=s+5;
            console.log("S && U");
        }
        if(hasS && hasL){
            s=s+5;
            console.log("S && L");
        }
        if(hasL && hasU){
            s=s+5;
            console.log("U && L");
        }
        if(hasL && hasN){
            s=s+5;
            console.log("U && L");
        }
        if(hasU && hasN){
            s=s+5;
            console.log("U && L");
        }
        if(hasS && hasN){
            s=s+5;
            console.log("U && L");
        }
        if(hasL && hasU && hasS){
            s= s+5;
            console.log("All");
        }
        if(hasL && hasU && hasN){
            s= s+5;
            console.log("All");
        }
        if(hasL && hasN && hasS){
            s= s+5;
            console.log("All");
        }
        if(hasN && hasU && hasS){
            s= s+5;
            console.log("All");
        }
        if(hasL && hasU && hasS && hasN){
            s= s+5;
            console.log("All");
        }
        s= s+l*3;
        console.log("s="+s);
        score.push(s);
        console.log("gets "+s+" points!");

    }
    $.ajax({
            url : "guess.txt",
            dataType: "text",
            success : function (data) {
                var pw = data;
                pw = pw.split(" ");
                var pws = [];
                console.log(pw);
                for(i=0;i<pw.length;i++){
                    StrI(pw[i]);
                    $("#list").append("<div class = 'blur inline'><h1>"+pw[i]+"&nbsp"+"</h1></div>");
                    var b = "blur("+((score[i]/12)-1)+"px)";
                    console.log(b);
                    $(".blur:last-of-type").css("filter",b);
                }
                $(".blur").hover(function(){
                    console.log(blurState);

                    if(blurState ==1){
                        saveB = $(this).css("filter");
                        $(this).css("filter","blur(0px)");
                    }
                },function(){
                    if(blurState ==1){
                        $(this).css("filter",saveB);
                    }
                });
            }
    });

    var word,
        story,
        task = 0,
        introCounter = 1,
        data = [],
        blurState = 0;//...
    $("#glasses").hover(function(){
        $(this).removeClass("hide");
    },function(){
        $(this).addClass("hide");
    });
    $("#glasses").click(function(){
        if(blurState == 0){
            blurState = 1;
            $("body").addClass("glasses");
        }else if(blurState == 1){
            blurState = 0;
            $("body").removeClass("glasses");
        }
    });


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


var testing = function(a){
	if(/^[a-z1-9]+$/i.test(a)){
		console.log("Only Letters");
	}else{
		console.log("Not Only Letters");
	}
}

var st1 = "asdfgh";
var st2 = "asdfg2";
var st3 = "asdfg332#";
testing(st1);
testing(st2);
testing(st3);
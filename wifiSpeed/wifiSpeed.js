$(document).ready(function(){
	var imageAddr = "images/test.jpg" ;
	var startTime, endTime;
	var downloadSize = 246746;
	var download = new Image();

	function showResults() {
	    var duration = (endTime - startTime) / 1000;
	    var speedMps = (downloadSize / duration)/1000000;
	    console.log("Your connection speed is: \n" + 
	           speedMps + " Mps\n");
	}

	download.onload = function () {
	    endTime = (new Date()).getTime();
	    showResults();
	}
	startTime = (new Date()).getTime();
	download.src = imageAddr;
});


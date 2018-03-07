$(document).ready(function(){
	var imageAddr = "images/test.jpg" ;
	var startTime, endTime;
	var downloadSize = 200000;
	var download = new Image();

	function showResults() {
	    var duration = (endTime - startTime) / 1000;
	    var bitsLoaded = downloadSize * 8;
	    var speedBps = (bitsLoaded / duration);
	    alert("Your connection speed is: \n" + 
	           speedBps + " bps\n");
	}

	download.onload = function () {
	    endTime = (new Date()).getTime();
	    showResults();
	}
	startTime = (new Date()).getTime();
	download.src = imageAddr;
});


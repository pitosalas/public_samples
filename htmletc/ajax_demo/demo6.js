/*
Some more goodies. Timers which may be useful for background work
*/

var myTimer = null;

function setTimer() {
	document.getElementById("status").innerHTML = "Started timer..."
	myTimer = setInterval(callBack, 10);
}

function clearTimer() {
	document.getElementById("status").innerHTML = "Stopped timer..."
	clearInterval(myTimer);
}

function callBack() {
	var d = new Date();
	var t = d.getMilliseconds();
	document.getElementById("timer").innerHTML = `Time in ms = ${t}`;
}

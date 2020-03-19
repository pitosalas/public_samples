/*
	Here are some general examples of basic javascript.
	Notice commenting for single line and mutli line
*/

// Dynamic typing, like ruby. Notice string, numbers, boolean, undefined.
var x = 100;
var name = "Pito", town = "Arlington";
var happy = true;
var iAmUndefined;
x = "a string";
x = true;

var no1 = 100;
var no2 = 200;
var no3 = 100;

// Odd Equality Rules.
document.write("<h3>Odd Equality Rules</h3>")
if (no1 == 100) {
	document.write("<p>True: 100 == 100</p>");
} else {
  document.write("<p>False: 100 == 100</p>");
}
if (no1 === 100) {
	document.write("<p>True: 100 === 100</p>");
} else {
  document.write("<p>False: 100 === 100</p>");
}
if (no1 == "100") {
	document.write("<p>True: 100 == '100'</p>");
} else {
  document.write("<p>100 == '100'</p>");

}
if (no1 === "100") {
	document.write("<p>True: 100 === '100'</p>");
} else {
  document.write("<p>False: 100 === '100'</p>");
}
if (no1 === no3) {
	document.write("<p>True: 100 === no3</p>");
} else {
  document.write("<p>False: 100 === no3</p>");
}

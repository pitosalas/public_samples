/*
	Some more sample JS to warm you up.
*/
// Illustrate prompting user, and alerting
var who = prompt("Please Enter Your Name", "enter your name here");
alert("It seems you are: " + who);

//	Arrays can take different data type and can be created in different ways
var anArray=["Yes", "password", 1.0, 2, false];
var anotherArray = new Array(4,3);
var newArray = anArray.concat(anotherArray);

// document.write writes to the html stream
document.write("<hr/><h4>array.toString():</h4>");
document.write(newArray.toString());
document.write("<br/>");
document.write("<br/>");

console.log(newArray.join("<br/>"));
document.write("<hr/><h4>array.join(br): </h4>");
document.write(newArray.join("<br/>"));

// Loops are just like Java or C
document.write("<hr/><h4>Do Loop</h4><ul>");
for (var i=0; i<3; i++) {
  document.write(`<li>List entry: ${i}</li>`);
}
document.write("</ul>");

// Functions by themselves, can take arguments and return values
function helloWorld() {
  document.write("Hello World");
}

function greet(name) {
  document.write("Hello " + name);
  return name;
}

// for debugging you can write to the console or set breakponts etc.
console.log("I am debuggable. Look for me in the log of the debugger in the browser!");

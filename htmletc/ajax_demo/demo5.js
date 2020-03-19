// Now lets start examinig the DOM from Javascript.
// Notice that getElementsByClassName returns an array!
// Also notice that the javacript script tag comes after all the html!

console.log("Example 1:")
console.log(document.getElementsByClassName('author')[0].innerHTML);
console.log(document.getElementById('first').innerHTML);

// Now lets try to actually change the html file!
// Change the author's html
console.log("\nExample 2:")
document.getElementsByClassName('author')[0].innerHTML = "Pito Salas";

document.getElementsByClassName('author')[0].style.color = "red";

document.getElementsByClassName('author')[0].style.fontStyle = "italic";

document.getElementsByClassName('author')[0].style.fontSize = "200%";

console.log(document.getElementsByClassName('stanza').length);

// Events can be triggered in all kinds of situations: clicking, page loaded
// input field changed, mouse hover, mouse up and down, keystroke etc etc.

// Here's the list: http://www.w3schools.com/tags/ref_eventattributes.asp
// NB font-size in css becomes fontSize in the dom.

console.log("\nExample 3:")
function authorHover(arg) {
	if (arg == 1) {
		document.getElementsByClassName('author')[0].style.fontSize="300%";
	} else {
		document.getElementsByClassName('author')[0].style.fontSize="200%";
	}
}

// Now, let's access the DOM nodes more surgically. There is a complete
// set of indexing, modifying and searching primitives that can choose
// any part of the dom tree.
// Each node has properties:
//		nodeName -- tag name or attribute name
//		nodeValue -- for text nodes, it's the actual text, and for attribute nodes is the attribute value
//
// Here are a few examples:

//console.log(document.body.childNodes[1].nodeName);
//console.log(document.body.childNodes[1].nodeValue);

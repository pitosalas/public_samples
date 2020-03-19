var string1 = "<h2>Here Comes a Sail Boat</h2>";

var string2 =
    "<img src=\"http://travelandtell.files.wordpress.com/2011/02/sailboat-1.jpg\" width=300></img>";

function changeHTML(theId, newHTML) {
  console.log(document.getElementById(theId).innerHTML);
  document.getElementById(theId).innerHTML = newHTML;
};

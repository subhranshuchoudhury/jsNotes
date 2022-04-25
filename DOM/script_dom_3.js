// Selecting element

// By tag name

console.log(document.getElementsByTagName("div"));

// change its property

document.getElementsByTagName("div")[1].style.color = "red"; // pass the index of the tag.
document.getElementsByTagName("div")[0].style.color = "green"; // DOM DISPLAY TITLE

// By Class name

console.log(document.getElementsByClassName("dom-title"));

// change its property

document.getElementsByClassName("dom-title")[0].style.color = "purple";

// By ID

document.getElementById("display").innerHTML = "22nd line code." // no need of '#'.

// Query selector

console.log(document.querySelector("#display"));
document.querySelector("#display").style.color = "blue"; // for ID = #idname, Class = .classname, Tag = tagname.
document.querySelector("#main-container #display-2").style.color = "yellow"; // hierarchy type selection.

// Query selector All

console.log(document.querySelectorAll(".div-class")); // it will select all .div-class and store it in like array.
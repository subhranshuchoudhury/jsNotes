// Manupulating and Changing styles of HTML elements.




document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "50px"; // in css font-size but here we have to use all in camel casing : fontSize
// document.querySelector("h1").style.padding = "30%";
// document.querySelector("h1").style.backgroundColor = "blue";
// document.querySelector("h1").classList.add("invisible");
// document.querySelector(".invisible").innerHTML = "Manupulation";
console.log(document.querySelector("h1").classList.toggle("dark")) // true
console.log(document.querySelector("h1").classList.toggle("dark")) // false

function func(argument) {
	document.querySelector("h1").classList.toggle("dark") // toggle dark mode when call the function.
}

document.querySelector("h1").innerHTML = "<i>Hey Programmer: ctrl+shift+i</i>";




// Reference : https: www.w3schools.com/jsrEF/default.asp
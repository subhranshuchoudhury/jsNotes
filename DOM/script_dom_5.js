// Manupulating Attributes

// getAttribute & setAttribute

console.log(document.querySelector("a").attributes);
console.log(document.querySelector("a").getAttribute("href"));

document.querySelector("a").setAttribute("href","https://github.com/subhranshuchoudhury");
// After change
console.log(document.querySelector("a").getAttribute("href"));


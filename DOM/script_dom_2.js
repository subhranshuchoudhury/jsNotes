/*
<body>
		<center>
		<h1>Press Ctrl+Shift+i</h1>
		<h3>Open Console ,and Code.</h3>
		<a style="text-decoration: none;color: black;" href="https://peerlist.io/subhranshu">@SSC</a>
		<div>
			<h2>DOM DISPLAY</h2>
			<div id="display">This is Display for DOM.</div>
		</div>
		</center>
		<script type="text/javascript" src="DOM/script_dom_2.js"></script>
</body>
*/


console.log(document.firstElementChild) // Whole HTML
console.log(document.firstElementChild.firstElementChild) //Head section
console.log(document.firstElementChild.lastElementChild) // Whole Body
console.log(document.firstElementChild.lastElementChild.lastElementChild) // Inside Body --> Javascript
console.log(document.firstElementChild.lastElementChild.childElementCount) // 2 Means (center and JS)
console.log(document.firstElementChild.lastElementChild.firstElementChild.firstElementChild) // Selecting h1
console.log(document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.firstElementChild) // Selecting h2 (HTMl --> BODY --> Center --> Div --> h2)


// Properties: Describes something about the object.
// Methods: Things the object can do.

/*

Example: If a car is a object.

color, size, no of doors ===> Called Property.

drive, moving, turn on lights ==> Called Methods.


Properties: innerHTML, style, firstChild etc.
Methods: click(), appendChild(), SetAttribute()
*/



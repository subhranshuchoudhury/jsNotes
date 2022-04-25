// Function

// a piece of code that we can use again and again, without writing the whole code

/* 

Syntax: 

function {function_name}(argument){
	
	{Your Code.}
}

Call a function:

{function_name}();

*/

function printMyName10Times(){ // i have to write it once and i can call it any number of time. no need to write the 10 lines of code again and again.
	console.log("Subhranshu");
	console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// console.log("Subhranshu");
	// dumb way to print something 10 times >.<
}

printMyName10Times(); // call the upper function.


// Practice function here: https://stanford.edu/~cpiech/karel/ide.html

// Parameters and Arguments(real values passed to the function)

function myAge(age) {
	console.log("User age: "+age);
}

myAge(2 /*Pass the argument here*/);


// Math.floor()

var milk_1_pkt = 23;
var money = 53;

// if you want to buy milk 

console.log(money/milk_1_pkt); // in float, i mean you cant buy 0.30 pkt milk.
console.log(Math.floor(money/milk_1_pkt)); // now in this line you will get a round(integer type) value of the float.




// Outputs and Returns

function textModify(text) {
	var newText = text + " : Modified(return from function)";
	return newText;
}

var modifiedText = textModify("Subhranshu"); // you can store the return value.
console.log(modifiedText);
console.log(textModify("Hello"));


// Challenge: BMI calculator, return value should store in a variable.
// weight in kg and height in m.

function bmiCalculator(weight,height) {
	return Math.round(weight/height**2);
}

var bmi = bmiCalculator(75,1.67);
console.log(bmi);
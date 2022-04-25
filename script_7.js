// Comparators and equality


var a = 2;
var b = 2;
var c = "chintu";
var d = "2";

console.log(a==b); //true
console.log(a==c); //false

console.log(a===b); //true
console.log(a===c); //false

console.log(a===d); //false
console.log(a==d); //true


// Comparators

if (a&&b==2) {
	console.log("A and B equals to 2");
}

if (a||c==2) {
	console.log("One of the variable has the value 2");
}

if (a&&b!=1) {
	console.log("None of these variable equal to 1");
}

if (a||b!=1) {
	console.log("Any of the variable is not equal to 1");
}

// Challenge - Leap year code challenge.
// FlowChart: https://drive.google.com/file/d/1xxuBzFvO_l0pQ268Z_oXRslWeTOC5Bo0/view?usp=sharing

function isLeap(year) {

	if (year%4==0) {
		if (year%100==0) {
			if (year%400==0) {
				console.log("Leap Year.")
			}else {
				console.log("Not Leap Year.")
			}

		}else {
			console.log("Leap Year.")
		}

	}else {
		console.log("Not Leap Year.");
	}
	
}

isLeap(2100);


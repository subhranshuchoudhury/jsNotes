// Random number generation

// Math.random() function will generate 16 decimal place number.
// The value always in between 0 and 1.
var randomNum = Math.random();
console.log(randomNum);

// Create a dice game

function rollDice(){
	return Math.floor((Math.random()*6)+1) ;
	// as we multiply it with 6, it will generate a number between 0 & 5. Then we will add 1 to generate number b/w 1 & 6.

}

console.log(rollDice())


// Create love calculator


function loveCalc(){

	var p1 = prompt("Enter your name.");
	var p2 = prompt("Enter your partner name.");

	return ("Love between " + p1 + " and "+ p2 +" is " + Math.floor((Math.random()*100)+1) + "%");

}

// var love = loveCalc();
console.log(love)


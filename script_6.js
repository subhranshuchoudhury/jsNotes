// If-Else Conditionals and Logic

/*

if (condition){
	//code
}else{
	//code
}

*/
var num = 27;
// var num = prompt("Enter number: ");

if (num%2==0) {
	console.log(`${num} is even`)
} else {
	console.log(`${num} is odd`)
}


// Excercise, Authenticate system

// var userPass = parseInt(prompt("Enter Password"));
var userPass = 23445;
const correctPass = 244688;


if (userPass==correctPass) {
	console.log("Woo! Correct Password.");
}else {
	console.log("Wrong Password, Fake user!")
}

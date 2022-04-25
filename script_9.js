// While Loops

/*
while (something is true){
	// do something
}
*/
let i = 0;

while (i<=5){ // condition should true.
	console.log(i);
	i++;
}

// Excercise: create a password cracker / bruteforce attack

const password = 2431;
var hash = 0;

while (hash!=password) {
	console.log('Processing...')
	hash++;
}

console.log("Password is: "+ hash);
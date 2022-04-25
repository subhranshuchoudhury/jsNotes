// JS ARRAYS

// var array_Name = [array1,array2,..];

var colorContainer = ['red','green','blue','white','orange','black'];

console.log(colorContainer[0]);

console.log(colorContainer.includes('red')); // it will return true if red is in the array.

//push & pop
//array_Name.push() this is for insert a item into the array
//array_Name.pop()  this will drop the last item from the array.

colorContainer.push("violet"); //violet added
colorContainer.push("yellow"); //yellow added

console.log(colorContainer);
colorContainer.pop(); //yellow removed
console.log(colorContainer);
 
var array_container = [];//empty array
var counter = 1;
function fizzBuzz(){


	if (counter%5==0 && counter%3==0) {
		array_container.push("FizzBuzz");
	}else if (counter%5==0) {
		array_container.push("Buzz");
		
	}else if (counter%3==0) {
		array_container.push("Fizz")
		
	}else {
		array_container.push(counter);
	}

	counter++;

	console.log(array_container);
}

// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz() // uncomment it for call the function.
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()
// fizzBuzz()

// same work easily in for loop

// for(let i=1;i<=100;i++){
// 	if (i%3==0 && i%5==0) {
// 		console.log("FizzBuzz");
// 	}else if (i%3==0) {
// 		console.log("Fizz");
		
// 	}else if (i%5==0) {
// 		console.log("Buzz")
// 	}else {
// 		console.log(i);
// 	}
// }

// Excercise : Who will pay for the party? radomly choose a name from the array.

function whoPaying(names){
	var length_of_array = names.length; // it will give us the length of the array.
	var random_array = Math.floor(Math.random()*(length_of_array+1)); // generate a random index number.
	// console.log(names[random_array]);
	return `${names[random_array]} is going to buy lunch today!`;
}

console.log(whoPaying(["Chintu","Zinu","Chinu","Pattis","Baishnavi"])); // pass array here or create separate array.
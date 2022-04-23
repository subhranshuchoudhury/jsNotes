// Basic arithmetic and modulo operators

var num_1 = 10;
var num_2 = 5;

console.log(num_1+num_2);
console.log(num_1*num_2);
console.log(num_1/num_2);
console.log(num_1**num_2); //10 to the power 5.
console.log(num_1%num_2); //remainder, modulo

// precidence. 

console.log(1+3*5); // result: 16
console.log((1+3)*5); // result: 20

// excercise: dog age to human age converter.

// formula: human age = (dog age - 2) x 4 + 21

var dog_age = 18;
console.log("Human age: ",(dog_age-2)*4+21);

// increment, decrement
// 1st assigns then increment. check quiz row: 35
num_1++;
console.log(num_1)
num_1--;
console.log(num_1)

// short hand method

// num_1 = num_1 + num_2; same as num_1 += num_2;

// Quiz

// What does y equal ?

var x = 3;
var y = x++;

y += 1;


//Ans

console.log(y)

// 5 insted of 4 because when we write y = x++ , y will assigned as y = x then x increment with +1;
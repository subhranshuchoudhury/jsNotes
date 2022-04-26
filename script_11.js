// Passing function as argument

function calculator(num1,num2,func){
	return func(num1,num2);
}

function add(num1,num2) {
	return num1+num2;
}

console.log(calculator(1,2,add)) // add

function divide(num1,num2) {
	return num1/num2;
}

console.log(calculator(2,3,divide)); // divide

function multiply(num1,num2) {
	return num1*num2;
}

console.log(calculator(2,6,multiply)); // multiply

function subtract(num1,num2) {
	return num1-num2;
}

console.log(calculator(3,5,subtract)); // subtract
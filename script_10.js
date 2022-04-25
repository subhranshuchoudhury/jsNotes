// for loop

/*

for(let i=0;i<3;i++){
	// your code
}

*/

// print name 10 times.

for(let i=0;i<10;i++){
	// console.log('Subhranshu');
}


// Fibonacci challenge

function fibonacci(n) {
	var op_array = [];
	if (n===0) {
		op_array = [];
	}
	else if (n===1) {
		op_array = [0];
	}
	else if (n===2) {
		op_array = [0,1];
	}
	else if (n>2) {
		op_array = [0,1];
		for(let i=2;i<n;i++){
			op_array.push(op_array[op_array.length-2]+op_array[op_array.length-1]);
		}
	}
	return op_array;
}

// console.log(fibonacci(6))
const URL = "https://reqres.in/api/users?page=1";
const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
var data = "It will hold JSON data";


// xhr.onreadystatechange = function(){
// 	if (xhr.readyState === 4) {
// 		console.log("Data loaded!");
// 		const jsonFormatData = xhr.response;
// 		// console.log(jsonFormatData);
// 		data = JSON.parse(jsonFormatData);
		
// 		shiwww()
// 	}
// }

xhr.onload = ()=>{ // it only and only run when readystate == 4.
	if (xhr.status >= 200 && xhr.status < 300) {
		console.log("Data loaded!");
		const jsonFormatData = xhr.response;
		// console.log(jsonFormatData);
		data = JSON.parse(jsonFormatData);
		// console.log(data.data.length)
		fetchData()
	}else {
		alert("Error!, Status code: "+ xhr.status);
	}
}

function fetchData () {
	
	for (var i = 0; i < data.data.length; i++) {
		console.log(`Email: ${i+1} --> ${data.data[i].email}`);
	}

}

xhr.send();

// Must use: https://jsonpathfinder.com/

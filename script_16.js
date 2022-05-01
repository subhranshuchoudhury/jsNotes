const URL = "https://jsonplaceholder.typicode.com/posts";
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
		fetchData()
	}else {
		alert("Error!, Status code: "+ xhr.status);
	}
}

function fetchData () {
	
	for (var i = 0; i < data.length; i++) {
		console.log(`Title: ${i+1} --> ${data[i].title}`);
	}

}

xhr.send();

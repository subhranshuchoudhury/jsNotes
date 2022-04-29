const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(
	bodyParser.urlencoded({extended:true})
);
app.get("/",function(req,res) {
	res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
	// console.log("data received.")
	// res.send("Data received! Thanks")
	console.log(req.body);

	// You can use parseInt() if only integer required.

	var num1 = Number(req.body.num1);

	var num2 = Number(req.body.num2);

	var result = num1+num2;

	res.send("Calculation result: "+result);
})
//...........

app.listen(3000,function(){
	console.log("Server Strated: 3000")
})
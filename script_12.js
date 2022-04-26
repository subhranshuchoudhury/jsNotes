// JS OBJECTS

var personOne = {
	name: "Chintu",
	age: 24,
	height: 5.6,
	skinColor: "fair",
	hobbies: ["Badminton","Programming","Singing"]
}

// Constructor function
function bellBoy(name,age,experience,hobbies){
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.hobbies = hobbies;
}

var bellBoy1 = new bellBoy("chintu",24,5,["Badminton","Programming","Singing"]);
var bellBoy2 = new bellBoy("Subhranshu",18,2,["Coding","Drawing","Cooking"]);
console.log(bellBoy1);
console.log(bellBoy2);

// Accesing object values

console.log(bellBoy1.name);
console.log(bellBoy2.hobbies[1]);
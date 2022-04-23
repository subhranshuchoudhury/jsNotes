// STRING

// string concatenation

console.log("My name is" + "Chintu.");
console.log("My name is" + " " + "Chintu.")

var stringOne = "Hey";
var stringTwo = "Subhranshu";

// alert(stringOne+" "+stringTwo+ ": This is a string.");

//String length.

var myName = "Etiam dignissim diam quis enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Arcu cursus vitae congue mauris rhoncus ";
console.log("Length of my name: " + myName.length);
console.log("Length of my name: ",myName.length); // after use " , " the length is in a int format not in string format.


// Excercise: Make little program that will count your input message and print your string length left from 140 characters.

var myMSG = "I am a github user."; //use alert for input
console.log("Your message: ",myMSG,"has ",myMSG.length," character. left character: ",140 - myMSG.length); // you can alert it also.

// Slice function

var name = "Subhranshu";
// 1st index is 0 not 1.
// slice(start: int, end: int)
console.log(name.slice(0,10))
console.log(name.slice(0,2))
console.log(name.slice())

// Challenge

// cut down the rest characters of the paragraph if it has more than 140 characters.

var paragraph = "Etiam dignissim diam quis enim. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Arcu cursus vitae congue mauris rhoncus aenean. Dignissim cras tincidunt lobortis feugiat vivamus. Sed velit dignissim sodales ut eu. In pellentesque massa placerat duis ultricies. Malesuada proin libero nunc consequat interdum varius. Consectetur lorem donec massa sapien faucibus et molestie. Augue mauris augue neque gravida in fermentum et sollicitudin. Sit amet volutpat consequat mauris nunc congue. Morbi tincidunt augue interdum velit euismod in pellentesque massa placerat. Nulla facilisi nullam vehicula ipsum a. Fermentum iaculis eu non diam phasellus vestibulum. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum."; // use prompt for get input from user.

var final_paragraph = (paragraph.slice(0,140));

console.log("Final paragraph: ",final_paragraph);

// toUpperCase()

var word = "Elephant";
console.log(word.toUpperCase());
word = word.toUpperCase();

//toLowerCase()

console.log(word.toLowerCase());
word = word.toLowerCase();

// Challenge String Casing
// input : what is your name ?, user input : chintu or CHINTU
// output: Hello, Chintu {1st letter in uppercase}.

// ANS
name = "chintu"; // variable already declared. use prompt for get user value.
name  = name.slice(0,1).toUpperCase() + name.slice(1,).toLowerCase();
console.log("Hello, "+name);
// console.log(name.slice(0,1).toUpperCase(),name.slice(1,));
// console.log(name.slice(0,1).toUpperCase()+name.slice(1,));

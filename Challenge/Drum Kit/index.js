var myDrums = document.querySelectorAll(".drum");


// Button click section

for(let i=0;i<myDrums.length;i++){
	
	myDrums[i].addEventListener("click",function(){
		
		var key = this.innerHTML; // saves the inner html in key variable.
		console.log('Clicked-->', key)
		playSound(key);

		
	});
}


// Keyboard press section

document.addEventListener("keydown",function(key_down_data){
	console.log('Pressed-->',key_down_data.key)
	playSound(key_down_data.key);
})






// Play sound section


function playSound(key) {
	btnAnimation(key);
	switch (key) {
			case "w":
				var tom1 = new Audio('sounds/tom-1.mp3');
				tom1.play();
				break;

			case "a":
				var tom2 = new Audio('sounds/tom-2.mp3');
				tom2.play();
				break;

			case "s":
				var tom3 = new Audio('sounds/tom-3.mp3');
				tom3.play();
				break;

			case "d":
				var tom4 = new Audio('sounds/tom-4.mp3');
				tom4.play();
				break;

			case "j":
				var snare = new Audio('sounds/snare.mp3');
				snare.play();
				break;

			case "k":
				var crash = new Audio('sounds/crash.mp3');
				crash.play();
				break;

			case "l":
				var kick = new Audio('sounds/kick.wav');
				kick.play();
				break;


			default:
				// statements_def
				break;
		}
}


function btnAnimation(key){

	document.querySelector("."+key).classList.add("pressed");
	setTimeout(function(){
		document.querySelector("."+key).classList.remove("pressed");
	},100)
}

// btnAnimation("a");

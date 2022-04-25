var diceOne = document.querySelector(".dp1");
var diceTwo = document.querySelector(".dp2");
var resultDisplay = document.querySelector("h1");


function startGame() {
	diceOne.innerHTML = rollDice();
	diceTwo.innerHTML = rollDice();
	checkWinner();
}

function rollDice() {
	return Math.floor(Math.random()*6)+1;
}

function checkWinner() {
	if (diceOne.textContent == 6) {
		resultDisplay.textContent = "Winner! Player One";
	}else if (diceTwo.textContent == 6) {
		resultDisplay.textContent = "Winner! Player Two";
		
	}else if (diceOne.textContent == 6 && diceTwo.textContent == 6) {
		resultDisplay.textContent = "Oops! Match Draw"
		
	}
}

//Define Variables
var guessNumber = 9; //number of guesses user has remaining
var currentWord; //current word user is trying to guess
var userProgress = ""; //progress that display to user
var currentProgress = ""; //progress during current turn
var lettersGuessed = ""; //letters that have been guessed
var repeat = false; //tracks whether letter has been repeated
var winCount = 0; //tracks number of wins
var userGuess

//Display Remaining Incorrect Guesses
function displayRemainingGuesses() {
	document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
}

//Generates New Word
function generateWord() {
	var words = ["psycho", "halloween", "jaws", "seven", "alien", "scream", "frankenstein", "dracula", "zombieland","it", "anaconda", "boogeyman", "carrie", "cloverfield", "misery", "hannibal", "insidious", "orphan", "ouija"];
	currentWord = words[Math.floor(Math.random()*words.length)];
}

//Displays underscores in place of letters  
function displayProgress() {
	for (i=0;i<currentWord.length;i++) {
	userProgress = userProgress + ("_")
	document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
	}
}

//Displays Win Count
function displayWins() {
	document.getElementById("win-count").innerHTML = "<h3>" + winCount + "<h3>";
}


//Function to check to see if the letter has been guessed
function checkIfGuessed() { 
		for (i=0;i<lettersGuessed.length;i++) {
			if (lettersGuessed.charAt(i) == userGuess) {
				repeat = true;
			} else {
			}
		}
	}


//Function that updates the progress
	function updateProgress() {
		for (i=0;i<userProgress.length;i++) {
			if (userProgress.charAt(i) == "_") {
				if (currentWord.charAt(i) == userGuess) {
					currentProgress = currentProgress + userGuess;
				} else {
					currentProgress = currentProgress + "_";
				}
			} else {
				currentProgress = currentProgress + userProgress.charAt(i);
			}
		}
	}	


function startAgain() {
	resetHangman();
	winCount = 0;
	playGame();
	var remove = document.getElementById("you-lose");
		remove.classList.remove("lose-show");
	document.getElementById("wrong").innerHTML = "";

}

//Play Game Function
function playGame() {
	//Reset variables
	guessNumber = 9; 
	userProgress = "";
	currentProgress = "";
	lettersGuessed = "";
	repeat = false;
	//Call game functions
	displayRemainingGuesses();
	generateWord();
	displayProgress();
	displayWins();
}

//Function to display letters on screen
	function displayGuess() {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(userGuess.toUpperCase());
		node.appendChild(textnode);
		document.getElementById("wrong").appendChild(node);
	}

//Call Play Game when documented loaded
playGame();

//Function to add body part to hangman
	function hangman() {
		if(guessNumber == 8) {
			var hang = document.getElementById("head");
    		hang.classList.add("show");
		} if(guessNumber == 7) {
			var hang = document.getElementById("body");
    		hang.classList.add("show");
		} if(guessNumber == 6) {
			var hang = document.getElementById("right-arm");
    		hang.classList.add("show");
		} if(guessNumber == 5) {
			var hang = document.getElementById("left-arm");
    		hang.classList.add("show");
		} if(guessNumber == 4) {
			var hang = document.getElementById("left-leg");
    		hang.classList.add("show");
		} if(guessNumber == 3) {
			var hang = document.getElementById("right-leg");
    		hang.classList.add("show");
		} if(guessNumber == 2) {
			var hang = document.getElementById("left-eye");
    		hang.classList.add("show");
		} if(guessNumber == 1) {
			var hang = document.getElementById("right-eye");
    		hang.classList.add("show");
		} if(guessNumber == 0) {
			var hang = document.getElementById("mouth");
    		hang.classList.add("show");
		}
    }


 //Function to Reset Hangman
    function resetHangman() {
			
		var reset = document.getElementById("head");
		reset.classList.remove("show");

		var reset = document.getElementById("body");
		reset.classList.remove("show");

		var reset = document.getElementById("left-arm");
		reset.classList.remove("show");

		var reset = document.getElementById("right-arm");
		reset.classList.remove("show");

		var reset = document.getElementById("left-leg");
		reset.classList.remove("show");

		var reset = document.getElementById("right-leg");
		reset.classList.remove("show");

		var reset = document.getElementById("left-eye");
		reset.classList.remove("show");

		var reset = document.getElementById("right-eye");
		reset.classList.remove("show");

		var reset = document.getElementById("mouth");
		reset.classList.remove("show");
	}



//When a key is pressed
document.onkeyup = function(event) {
	//The key is captured as the user's guess
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//Game Play
	
	//Check if letter has been guessed
	checkIfGuessed();

	//Check if the guess is correct
	var guessCorrect = false;

	for (i=0;i<currentWord.length;i++) {
		if (userGuess == currentWord.charAt(i)) {
			guessCorrect = true;
		}
	}

	//If letter has been guessed
	if (repeat) {
		//No action if letter has already been guessed
	//If letter has not been guessed
	} else {
		//The letters guessed is updated
		lettersGuessed = lettersGuessed + userGuess;
		//If letter is correct, update the progress
		if (guessCorrect) {
			updateProgress();
			userProgress = currentProgress;
			currentProgress = "";
			document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
		//If letter is wrong, hangman is updated and guess count goes down and new count is displayed
		} else {
			guessNumber -= 1;
			displayGuess();
			hangman();
			document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
		}
		//checks for win
		if (currentWord == userProgress) {
			document.getElementById("win").innerHTML = "<h3>You got it: " + currentWord + "!</h3>";
			winCount = winCount + 1;
			displayWins();
			document.getElementById("wrong").innerHTML = "";

			//reset hangman
			resetHangman();
			//play game
			playGame(); 

		} else if (guessNumber == 0) {
			document.getElementById("you-lose").classList.add("lose-show");

		} else {
			//reset repeat value and cnotinue playing
			var repeat = false; 
		}

	}
}



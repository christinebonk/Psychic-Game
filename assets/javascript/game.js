
//Define Variables
var guessNumber = 9; //number of guesses user has remaining
var currentWord; //current word user is trying to guess
var userProgress = ""; //progress that display to user
var currentProgress = ""; //progress during current turn
var lettersGuessed = ""; //letters that have been guessed
var winCount = 0; //tracks number of wins
var userGuess //stores user guess

var hangmanGame = {
	//Display Remaining Guesses
	displayRemainingGuesses: function()	{
		document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
	},
	//Generate Word from Array
	generateWord: function() {
		var words = ["psycho", "halloween", "jaws", "seven", "alien", "scream", "frankenstein", "dracula", "zombieland","it", "anaconda", "boogeyman", "carrie", "cloverfield", "misery", "hannibal", "insidious", "orphan", "ouija", "zodiac", "vertigo", "babadook", "conjuring", "ring", "grudge"];
		currentWord = words[Math.floor(Math.random()*words.length)];
	},
	//Displays underscores in place of letters 
	displayProgress: function() {
		for (i=0;i<currentWord.length;i++) {
		userProgress = userProgress + ("_")
		document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
		}
	},
	//Display Win Count
	displayWins: function() {
		document.getElementById("win-count").innerHTML = "<h3>" + winCount + "<h3>";
	},
	//Updates progress
	updateProgress: function() {
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
		userProgress = currentProgress;
			currentProgress = "";
			document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
	},
	//Displays Guessed letters on screen
	displayGuess: function() {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(userGuess.toUpperCase());
		node.appendChild(textnode);
		document.getElementById("wrong").appendChild(node);
	},
	//Displays hangman on wrong guesses
	hangman: function() {
		guessNumber -= 1;
		if(guessNumber == 8) {
			document.getElementById("head").classList.add("show");
		} if(guessNumber == 7) {
			document.getElementById("body").classList.add("show");
		} if(guessNumber == 6) {
			document.getElementById("right-arm").classList.add("show");
		} if(guessNumber == 5) {
			document.getElementById("left-arm").classList.add("show");
		} if(guessNumber == 4) {
			document.getElementById("left-leg").classList.add("show");
		} if(guessNumber == 3) {
			document.getElementById("right-leg").classList.add("show");
		} if(guessNumber == 2) {
			document.getElementById("left-eye").classList.add("show");
		} if(guessNumber == 1) {
			document.getElementById("right-eye").classList.add("show");
		} if(guessNumber == 0) {
			document.getElementById("mouth").classList.add("show");
		}
		document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
	},
	//Resets hangman
	resetHangman: function() {
		var reset = document.getElementById("head");
		reset.classList.remove("show");
		reset.classList.remove("hangman-lose");

		var reset1 = document.getElementById("body");
		reset1.classList.remove("show");
		reset1.classList.remove("hangman-lose");

		var reset2 = document.getElementById("left-arm");
		reset2.classList.remove("show");
		reset2.classList.remove("hangman-lose");

		var reset3 = document.getElementById("right-arm");
		reset3.classList.remove("show");
		reset3.classList.remove("hangman-lose");

		var reset4 = document.getElementById("left-leg");
		reset4.classList.remove("show");
		reset4.classList.remove("hangman-lose");

		var reset5 = document.getElementById("right-leg");
		reset5.classList.remove("show");
		reset5.classList.remove("hangman-lose");

		var reset6 = document.getElementById("left-eye");
		reset6.classList.remove("show");
		reset6.classList.remove("hangman-lose");

		var reset7 = document.getElementById("right-eye");
		reset7.classList.remove("show");
		reset7.classList.remove("hangman-lose");

		var reset8 = document.getElementById("mouth");
		reset8.classList.remove("show");
		reset8.classList.remove("hangman-lose-mouth");

		var reset9 = document.getElementById("pole");
		reset9.classList.remove("show");
		reset9.classList.remove("hangman-lose");

		var reset10 = document.getElementById("pole2");
		reset10.classList.remove("show");
		reset10.classList.remove("hangman-lose");

		var reset11 = document.getElementById("stand");
		reset11.classList.remove("show");
		reset11.classList.remove("hangman-lose");

		var reset12 = document.getElementById("string");
		reset12.classList.remove("show");
		reset12.classList.remove("hangman-lose");
	},
	//Update after user win
	userWins: function() {
		document.getElementById("win").innerHTML = "<h3>You got it: " + currentWord + "!</h3>";
		winCount = winCount + 1;
		document.getElementById("wrong").innerHTML = "";
	},
	//Show user lose screen
	userLose: function() {
		document.getElementById("you-lose").classList.add("lose-show");
		document.getElementById("pole").classList.add("hangman-lose");
		document.getElementById("head").classList.add("hangman-lose");
		document.getElementById("body").classList.add("hangman-lose");
		document.getElementById("left-arm").classList.add("hangman-lose");
		document.getElementById("right-arm").classList.add("hangman-lose");
		document.getElementById("pole2").classList.add("hangman-lose");
		document.getElementById("right-leg").classList.add("hangman-lose");
		document.getElementById("left-leg").classList.add("hangman-lose");
		document.getElementById("left-eye").classList.add("hangman-lose");
		document.getElementById("right-eye").classList.add("hangman-lose");
		document.getElementById("stand").classList.add("hangman-lose");
		document.getElementById("mouth").classList.add("hangman-lose-mouth");
		document.getElementById("string").classList.add("hangman-lose");
	}
};

//Play Game Function
function playGame() {
	//Reset variables
	guessNumber = 9; 
	userProgress = "";
	currentProgress = "";
	lettersGuessed = "";
	repeat = false;
	//Call game functions
	hangmanGame.displayRemainingGuesses();
	hangmanGame.generateWord();
	hangmanGame.displayProgress();
	hangmanGame.displayWins();
}

//Call Play Game when documented loaded
playGame();

//Game functionality when a key is pressed
document.onkeyup = function(event) {
	//The key is captured as the user's guess
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	//Check if letter has been guessed
	var repeat = false;
	for (i=0;i<lettersGuessed.length;i++) {
			if (lettersGuessed.charAt(i) == userGuess) {
				repeat = true;
			} else {
			}
		}
	//Check if the guess is correct
	var guessCorrect = false;
	for (i=0;i<currentWord.length;i++) {
		if (userGuess == currentWord.charAt(i)) {
			guessCorrect = true;
		}
	}
	//If letter has been guessed
	if (repeat) { //No action if letter has already been guessed
	//If letter has not been guessed
	} else {
		lettersGuessed = lettersGuessed + userGuess; //The letters guessed is updated
		//If letter is correct
		if (guessCorrect) {
			hangmanGame.updateProgress(); //Update the progress
		//If letter is wrong
		} else {	
			hangmanGame.displayGuess();//Guess count goes down and new guess is displayed 
			hangmanGame.hangman();//Update hangman
		}
		//If user guesses word
		if (currentWord == userProgress) {
			hangmanGame.userWins(); //Update user wins
			hangmanGame.displayWins(); //Display wins
			hangmanGame.resetHangman();//reset hangman
			playGame(); //Restart the game
		//If user runs out of guesses
		} else if (guessNumber == 0) {
			hangmanGame.userLose();
		} else {
			//reset repeat value and continue playing
			var repeat = false; 
		}
	}
}

//Start Again Function
function startAgain() {
	hangmanGame.resetHangman();
	winCount = 0;
	playGame();
	var remove = document.getElementById("you-lose");
		remove.classList.remove("lose-show");
	document.getElementById("wrong").innerHTML = "";
	document.getElementById("win").innerHTML = "<h3>Press any key to get started!</h3>";
}






//Define Variables
var guessNumber = 13; //number of guesses user has remaining
var currentWord; //current word user is trying to guess
var userProgress = ""; //progres that display to user
var currentProgress = ""; //progress during current turn
var lettersGuessed = ""; //letters that have been guessed
var repeat = false; //tracks whether letter has been repeated
var winCount = 0; //tracks number of wins

//Display Remaining Incorrect Guesses
function displayRemainingGuesses() {
	document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
}

//Generates New Word
function generateWord() {
	var words = ["psycho", "halloween", "jaws", "seven", "alien", "scream"];
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
	document.getElementById("win-count").innerHTML = winCount;
}

//Play Game Function
function playGame() {
	//Reset variables
	guessNumber = 13; 
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

//Call Play Game when documented loaded
playGame();

//When a key is pressed
document.onkeyup = function () {
	//The key is captured as the user's guess
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//The letter is check to see if it has been guessed
	function checkIfGuessed() { 
		for (i=0;i<lettersGuessed.length;i++) {
			if (lettersGuessed.charAt(i) == userGuess) {
				repeat = true;
			} else {
			}
		}
	}

	checkIfGuessed();

	//The letters guessed is updated
	lettersGuessed = lettersGuessed + userGuess;

	
	//The letter is checked to see if it is correct

	var guessCorrect = false;

	for (i=0;i<currentWord.length;i++) {

		if (userGuess == currentWord.charAt(i)) {

			guessCorrect = true;

		} else {

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

	//Function to display letters on screen
	function displayGuess() {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(userGuess.toUpperCase());
		node.appendChild(textnode);
		document.getElementById("wrong").appendChild(node);
	}

	//Function to add body part to hangman
	function hangman() {

		if(guessNumber == 12) {
			var hang = document.getElementById("pole");
    		hang.classList.add("show");
		} if(guessNumber == 11) {
			var hang = document.getElementById("pole2");
    		hang.classList.add("show");
		} if(guessNumber == 10) {
			var hang = document.getElementById("string");
    		hang.classList.add("show");
		} if(guessNumber == 9) {
			var hang = document.getElementById("stand");
    		hang.classList.add("show");
		} if(guessNumber == 8) {
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

    //Reset Hangman

    function resetHangman() {
				var reset = document.getElementById("pole");
    			reset.classList.remove("show");

    			var reset = document.getElementById("pole2");
    			reset.classList.remove("show");

    			var reset = document.getElementById("head");
    			reset.classList.remove("show");

    			var reset = document.getElementById("string");
    			reset.classList.remove("show");

    			var reset = document.getElementById("stand");
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

	//Check to see if letter has been guessed
	if (repeat) {
		//No action if letter has already been guessed
	} else {
		//Check to see if letter is correct
		if (guessCorrect) {
			updateProgress();
			userProgress = currentProgress;
			currentProgress = "";
			document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
		
		} else {
			guessNumber -= 1;
			displayGuess();
			hangman();
		}
		
		//Reduce remaining guess
		document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
		var repeat = false; 

		//checks for win
		if (currentWord == userProgress) {
			document.getElementById("win").innerHTML = "Hello";
			winCount = winCount + 1;
			document.getElementById("win-count").innerHTML = winCount;
			document.getElementById("wrong").innerHTML = "";

			//reset hangman
			resetHangman();
			//play game
			playGame(); 

		}if (guessNumber == 0) {
			document.getElementById("win").innerHTML = "Loser";
			
		} else {
			//Game keeps playing
		}

	}
}





//Define Variables
var guessNumber = 13; //number of guesses user has remaining
var currentWord; //current word user is trying to guess
var userProgress = ""; //progres that display to user
var currentProgress = ""; //progress during current turn
var lettersGuessed = ""; //letters that have been guessed
var repeat = false; //tracks whether letter has been repeated
var winCount = 0; //tracks number of wins

//Display Remaining Guesses
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
				console.log("repeat" + repeat);
			} else {
				console.log("repeat" + repeat);
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

	//Check to see if letter has been guessed
	if (repeat) {


	} else {
		//Check to see if letter is correct
		if (guessCorrect) {
			updateProgress();
			userProgress = currentProgress;
			currentProgress = "";
			document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
		
		} else {
			displayGuess();
		}
		
		
		//Reduce remaining guess
		guessNumber -= 1;
		document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";
		var repeat = false; 


		//checks for win
		if (currentWord == userProgress) {
			document.getElementById("win").innerHTML = "Hello";
			winCount = winCount + 1;
			document.getElementById("win-count").innerHTML = winCount;
			document.getElementById("wrong").innerHTML = "";
			playGame(); 
		} else {

		}

	}
}



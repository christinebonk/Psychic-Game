

//Set Variables
var guessNumber = 15; 
var currentWord;
var userProgress = "";
var currentProgress = "";
var lettersGuessed = "";
var repeat = false;
var winCount = 0;

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

//Displays Wins
function displayWins() {
	document.getElementById("win-count").innerHTML = winCount;
}

//Play Game Function
function playGame() {
	//Reset variables
	guessNumber = 15; 
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
		console.log(userProgress);


		//checks for win
		if (currentWord == userProgress) {
			document.getElementById("win").innerHTML = "Hello";
			winCount = winCount + 1;
			document.getElementById("win-count").innerHTML = winCount;
			playGame(); 
		} else {

		}

}
}

 

//When all letters guessed increase wins by 1, generate new word, and play song

//When all turns used display the word, generate new word and play song

//If word has been guessed, don't guess again


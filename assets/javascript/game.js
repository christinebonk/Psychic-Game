

//Set max number of guess
var guessNumber = 15; 
console.log("Guess Number: " + guessNumber);
document.getElementById("guess").innerHTML = "<h3>" + guessNumber + "</h3>";

//Generate word
var words = ["psycho", "halloween", "jaws", "seven", "alien", "scream"];
var currentWord;

function generateWord() {
	currentWord = words[Math.floor(Math.random()*words.length)];
}

generateWord();

console.log(currentWord);

//Display current progress for words

	//userProgress to define progress before guess
var userProgress = "";

	//userProgress begins as the same number of underscores as letters in the word
for (i=0;i<currentWord.length;i++) {
	userProgress = userProgress + ("_")
	document.getElementById("word").innerHTML = "<h2>" + userProgress + "</h2>";
}
	//currentProgress to define progress after guess
var currentProgress = "";
var lettersGuessed = "";
var repeat = false;
console.log(userProgress);
console.log(lettersGuessed);



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

		if (currentWord == userProgress) {
			document.getElementById("win").innerHTML = "Hello";
		} else {

		}

}
}

 

//When all letters guessed increase wins by 1, generate new word, and play song

//When all turns used display the word, generate new word and play song

//If word has been guessed, don't guess again


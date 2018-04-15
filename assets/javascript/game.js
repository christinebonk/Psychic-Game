

//Set max number of guess
var guessNumber = 15; 
console.log("Guess Number: " + guessNumber);

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
}
	//currentProgress to define progress after guess
var currentProgress = "";

console.log(userProgress);

//Capture letter guessed

document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	//guess correct is defaulted to false
	var guessCorrect = false;

	//Check if letter is correct
	for (i=0;i<currentWord.length;i++) {

		if (userGuess == currentWord.charAt(i)) {

			guessCorrect = true;

		} else {

		}

	}

	//function to update progress
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

	//If letter is correct, call the updateProgress function
	if (guessCorrect) {
		updateProgress();
		userProgress = currentProgress;
		currentProgress = "";
	} else {
		//Print incorrect guess on screen
		var node = document.createElement("LI");
		var textnode = document.createTextNode(userGuess);
		node.appendChild(textnode);
		document.getElementById("wrong").appendChild(node);
	}
	
	console.log(guessCorrect);
	console.log("Current Progress: " + currentProgress)
	console.log("User progress: " + userProgress);

	//Reduce remaining guess
	guessNumber -= 1;
	console.log("Guess Number: " + guessNumber);
}

 

//When all letters guessed increase wins by 1, generate new word, and play song

//When all turns used display the word, generate new word and play song

//If word has been guessed, don't guess again


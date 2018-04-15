

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

//Display underscores for words

var userProgress = " ";
var currentProgress = "";

for (i=0;i<currentWord.length;i++) {
	userProgress = userProgress + ("_")
}

console.log(userProgress);

//Capture letter guessed
document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	var guessCorrect = false;


	//Check if letter is correct
	for (i=0;i<currentWord.length;i++) {

		if (userGuess == currentWord.charAt(i)) {

			guessCorrect = true;

		} else {

		}

	}

	//If letter is correct
	if (guessCorrect) {





		//Check which letter is correct
		for(i=0;i<currentWord.length;i++) {

			//Only check empty fields
			if(userProgress.charAt(i) == "_") {

				//Check if guess equals current field
				if (userGuess == currentWord.charAt(i)) {
						
					currentProgress = currentProgress + userGuess;
					console.log(userGuess);

				//If does not match replace with _
				} else {

					currentProgress = currentProgress + "_";

				}
			}
		

		else {

			currentProgress = currentProgress + userProgress.charAt(i);
		}

		userProgress = currentProgress;
	}

	}	

	else {
		//Print incorrect guess on screen
		document.write(userGuess);
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


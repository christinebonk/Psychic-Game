

//Set max number of guess

var guessNumber = 15; 
console.log("Guess Number: " + guessNumber);

//Generate word
var words = ["psycho", "halloween", "jaws", "seven", "alien", "scream"];

var currentWord = words[Math.floor(Math.random()*words.length)];

console.log(currentWord);

//Display underscores for words

var userProgress = " ";

for (i=0;i<currentWord.length;i++) {
	userProgress = userProgress + ("_ ")
}

console.log(userProgress);

//Listen for letters typed

document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(userGuess);

	var guessCorrect = false;


	for (i=0;i<currentWord.length;i++) {

		if (userGuess == currentWord.charAt(i)) {

			guessCorrect = true;

		} else {

		}

	}

	//Check if guess is correct
	if (guessCorrect) {

		//Check which letter is correct
		for(i=0;i<userProgress.length;i++) {

			//Only check empty fields
			if(userProgress.charAt(i) == "_ ") {

				//Check if guess equals current field
				if (userGuess == currentWord.charAt(i)) {
						
					userProgress.charAt(i) = userGuess;

				//If does not match replace with _
				} else {

					userProgress.charAt(i) = "_ ";

				}
			}
		

		else {
		}
	}

	}	

	else {
		//Print incorrect guess on screen
		document.write(userGuess);
	}
	
	
	console.log(guessCorrect);
	console.log("User progress: " + userProgress);

	//Reduce remaining guess
	guessNumber -= 1;
	console.log("Guess Number: " + guessNumber);
}

 

//When all letters guessed increase wins by 1, generate new word, and play song

//When all turns used display the word, generate new word and play song

//If word has been guessed, don't guess again


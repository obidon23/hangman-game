//variables
	var wordOptions = ["bob", "joe", "don", "dan"];
	var selectedWord = "";
	var lettersInWord = [];
	var numBlanks = 0;
	var blanksAndSuccesses = [];
	var wrongLetters = [];

	var winCount=0;
	var lossCount=0;
	var guessesLeft=6;



//functions
function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
		lettersInWord = selectedWord.split("");
		numBlanks = selectedWord.length;



		guessesLeft = 6;
		wrongLetters = [];
		blanksAndSuccesses = [];

		for (i=0; i < numBlanks; i++) {
			blanksAndSuccesses.push("_");
		}

		console.log(selectedWord);
		console.log(lettersInWord);
		console.log(numBlanks);
		console.log(blanksAndSuccesses);

		document.getElementById("sandbox").innerHTML = blanksAndSuccesses.join(" ");
		document.getElementById("wrongLetters").innerHTML = "Wrong Answers: " + wrongLetters;
		document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + guessesLeft;
		document.getElementById("wins").innerHTML = "Wins: " + winCount;


function checkLetters(letter) {
	alert(letter);
	var isLetterInWord = false;

	for(var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter){
			isLetterInWord = true;
		}
	}
}
}
 startGame();

 document.onkeyup = function(event) {
 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
 	checkLetters(letterGuessed);
 	console.log(letterGuessed);

 }

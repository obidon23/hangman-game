// variables	
var remainingGuesses = 6;
var goodLetters = [];
var answer = "";
var wrongLetters = [];
var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn"];		
var wins = 0;
var blanks = [];
var letterCount = [];
var userGuess="";

// start the game	
function start () {
	answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	letterCount = answer.length;
	goodLetters = answer.split("");

	var remainingGuesses = 6;
	var wrongLetters = [];
	var goodLetters = [];

	for (i = 0; i < letterCount; i++) {
		goodLetters.push("_");
	}

	console.log(answer);
	console.log(letterCount);
	console.log(goodLetters);

	document.getElementById("sandbox").innerHTML = goodLetters.join(" ");
	document.getElementById("remainingGuesses").innerHTML = "Remaining Guesses: " + remainingGuesses;
	document.getElementById("wins").innerHTML = "Wins: " + wins;
}

function letterCheck(userGuess) {
	
	var letterIndex = answer.indexOf(userGuess);

    if (letterIndex > -1) {
        alert(userGuess + " is in the word!");
        goodLetters.push(userGuess);
        document.getElementById("sandbox").innterHTML = goodLetters;
    } else {
        alert(userGuess + " is a wrong answer");
        wrongLetters.push(userGuess);
        remainingGuesses--;
    }
}

start();

document.onkeyup = function(event) {
	userGuess = event.key;
	letterCheck();
	}




	

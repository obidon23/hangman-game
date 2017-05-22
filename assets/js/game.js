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

	remainingGuesses = 6;
	wrongLetters = [];
	goodLetters = [];

	for (i = 0; i < letterCount; i++) {
		goodLetters.push("_");
	}

	console.log(answer);
	console.log(letterCount);
	console.log(goodLetters);

	document.getElementById("sandbox").innerHTML = goodLetters.join(" ");
	document.getElementById("remainingGuesses").innerHTML = "<p>Remaining Guesses: " + remainingGuesses + "</p>";
	document.getElementById("wins").innerHTML = "<p>Wins: " + wins +"</p>";
}

function letterCheck() {
	
	var letterIndex = answer.indexOf(userGuess);

    if (letterIndex > -1) {
        alert(userGuess + " is in the word!");
        goodLetters.indexOf(userGuess);
        document.getElementById("sandbox").innerHTML = goodLetters;
    } else {
        alert(userGuess + " is a wrong answer");
        wrongLetters.push(userGuess);
        remainingGuesses--;
        document.getElementById("wrongLetters").innerHTML = "<p> Wrong Answers: </p>" + "<p>" +wrongLetters + " </p>";
        document.getElementById("remainingGuesses").innerHTML = "<p>Remaining Guesses: </p>" + "<p>" + remainingGuesses + "</p>";

    }
}

start();

document.onkeyup = function(event) {
	userGuess = event.key;
	letterCheck();
	}




	

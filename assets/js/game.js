// variables	
var remainingGuesses = 6;
var goodLetters = [];
var answer = "";
var wrongLetters = [];
var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn"];		
var wins = 0;
var blanks = [];
var letterCount = [];


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

function letterCheck() {
	
	alert("it's working");

	var letterIndex = answer.indexOf(userGuess);

    if (letterIndex > -1) {
        console.log('ya got it');
        goodLetters.push(userGuess);
    } else {
        console.log("WRONG");
        wrongLetters.push(userGuess);
    }
}
start();

document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);
	letterCheck();
	}




	

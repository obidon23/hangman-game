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


}
//check the letter guessed
function letterCheck() {
	
	var letterIndex = answer.indexOf(userGuess);

    if (letterIndex > -1) {

        for (i=0; i < goodLetters.length; i++) {
        	if (answer[i] == userGuess) {
        		goodLetters[i] = (userGuess);
 			}       
        }
        document.getElementById("sandbox").innerHTML = "<h2>" + goodLetters.join(" ") + "</h2>";
        
    } 

    else {
        wrongLetters.push(userGuess);
        remainingGuesses--;
        document.getElementById("wrongLetters").innerHTML = wrongLetters;
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        
    }
    gameCheck();
}
// check for win or loss

function gameCheck() {
	if (remainingGuesses == 0) {
		alert("Oh No! You Lost!");

		var remainingGuesses = 6
		var goodLetters = []
		var wrongAnswer = []

		}

	else {
		var blankCheck = goodLetters.indexOf("_")

		if (blankCheck < 0) {
			alert("You Won!");
			wins++;

			var remainingGuesses = 6
			var goodLetters = []
			var wrongAnswer = []
		}
	}

}


$("#start").on("click", function() {
	start();
});

document.getElementById("sandbox").innerHTML = goodLetters.join(" ");
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
document.getElementById("wins").innerHTML = wins;	



	

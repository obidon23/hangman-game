// variables	
	var remainingGuesses = 6;
	var goodLetters = [];
	answer = "";
	var wrongLetters = [];
	var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn"];		
	var wins = 0;
	var blanks = [];
	var letterCount = [];


// start the game	
	function start () {
		var answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		var letterCount = answer.length
		goodLetters = answer.split("");
		
		var remainingGuesses = 6
		var wrongLetters = []
		var goodLetters = []

		for (i = 0; i < letterCount; i++) {
			goodLetters.push("_");
		}
		
document.getElementById("sandbox").innerHTML = goodLetters.join(" ");
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
document.getElementById("wins").innerHTML = wins;
 }

function letterCheck(userGuess
	) {

	var rightAnswer = false

	for (i=0; i<blanks; i++) {
		if answer[i] == userGuess	{
			rightAnswer = true;
			alert(userGuess = " is a right answer.")
		}
	}


start();

document.onkeyup = function(event) {
	var userGuess = event.key;
	letterCheck(userGuess);

}




	

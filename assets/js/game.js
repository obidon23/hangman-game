// variables	
var remainingGuesses = 6;
var answer = "";
var wrongLetters = [];
var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn"];		
var wins = 0;
var blanks = [];
var letterCount = [];
var userGuess="";
var activeGame = false;

document.getElementById("wins").innerHTML = wins;
document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

// start the game	
function start () {
	
	activeGame = true;
	blanks = [];
	answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	letterCount = answer.length;
	console.log(letterCount);
	remainingGuesses = 6;
	wrongLetters = [];

	for (i = 0; i < letterCount; i++) {
		blanks.push("<h2>_</h2>");
	}
	
	document.getElementById("sandbox").innerHTML = blanks.join(" ");
	document.getElementById("wrongLetters").innerHTML = wrongLetters;
	document.getElementById("remainingGuesses").innerHTML = remainingGuesses;

}

function letterCheck() {
	
	var letterIndex = answer.indexOf(userGuess);

    if (letterIndex > -1) {
        for (i=0; i < answer.length; i++) {
        	if (answer[i] == userGuess) {
        		blanks[i] = userGuess;
 			}       
        }
        document.getElementById("sandbox").innerHTML = blanks.join(" ");
        
    } 

    else {
        wrongLetters.push(userGuess);
        remainingGuesses--;
        // document.getElementById("wrongLetters").innerHTML = wrongLetters;
        // document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("wrongLetters").innerHTML = wrongLetters + " ";
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
    }
    gameCheck();
}

function gameCheck() {
	if (remainingGuesses == 0) {
		alert("Oh No! You Lost!");
		activeGame = false;
		}

	else {
		var blankCheck = blanks.indexOf("<h2>_</h2>")
		if (blankCheck < 0) {
			alert("You Won!");
			wins++;
			document.getElementById("wins").innerHTML = wins;
			activeGame = false;
		}
	
	}

}

document.onkeyup = function(event) {
	if (activeGame === true){
		userGuess = event.key;
		lettersOnly = event.keyCode;
		if (lettersOnly >= 65 && lettersOnly <= 90) {

			letterCheck();
		} else {
			alert("Please press a letter!");
		}
	}
}

$("#start").on("click", function() {
	$("#start").blur();
	start();
	if ($(this).hasClass('active')) {
      setTimeout(function() {
        $(this).removeClass('active').find('input').prop('checked', false);
      }.bind(this), 10);
    }
});



	

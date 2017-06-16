// variables	
var remainingGuesses = 6;
var answer = "";
var answerIndex;
var wrongLetters = [];
var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn", "mormont", "baelish", "connington"];
var images = ["stark.gif", "lannister.gif", "targaryen.gif", "tully.gif", "martell.gif", "greyjoy.gif", "baratheon.gif", "tyrell.gif", "drogo.gif", "arryn.gif", "mormont.gif", "baelish.gif", "connington.jpg"];		
var winnerMessage = ["Winter is coming", "Hear Me Roar", "Blood & Fire", "Family. Duty. Honor.", "Unbowed. Unbent. Unbroken.", "We Do Not Sow", "Ours is the Fury", "Growing Strong", "The Stallion that Mounts the World", "As High as Honor", "Here We Stand", "Only Cat", "A Griffin! A Griffin!"];
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
	answerIndex = computerChoices.indexOf(answer);
	console.log(answer);
	letterCount = answer.length;
	remainingGuesses = 6;
	wrongLetters = [];

	$(".image").html("<img>").attr("src", "assets/images/hangman.png").addClass("image");
	$(".image").append("<p>").text("And Now Your Watch Begins").addClass("image");

	for (i = 0; i < letterCount; i++) {
		blanks.push("<h2>_</h2>");
	}
	$(".game").append("<input type='hidden' name='touchpad'</input>");
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
	if (remainingGuesses === 0) {
		$(".image").html("<img>").attr("src", "assets/images/nightsking.gif");
		$(".image").append("<p>").text("And Now Your Watch Has Ended");
		activeGame = false;
		}

	else {
		var blankCheck = blanks.indexOf("<h2>_</h2>");
		if (blankCheck < 0) {

					$(".image").html("<img>").attr("src", 'assets/images/' + images[answerIndex]);
					$(".image").append("<p>").text(winnerMessage[answerIndex]);
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
		if ((lettersOnly >= 65 && lettersOnly <= 90) || (lettersOnly >= 97 && lettersOnly <= 122)) {

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



	

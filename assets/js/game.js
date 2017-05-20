		
$(document).ready(function(){
document.querySelector("#start").innerHTML="<h2>How's It Hangin'?</h2>" + "<p>Press &lt;enter&gt; to start the game.</p>"; 

	var remainingGuesses = 0;
	var userGuess = ""

	
	$(document).keyup( function(e) {
		switch(e.which) {
			case 13:
		//pick an answer
		var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", "arryn"];				
		answer = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		console.log(answer);
		}
	})
 		
	for (i = 0; i < answer.length; i++) {
		var blank = $("<div>")

		$(blank.addClass("blanks"));
		$(blank.text("_"));
		$("#sandbox").append(blank);
	}

	document.onkeyup = function(event) {

        // Determine which key was pressed
        var userGuess = event.key;
        var str = answer;
        var n = str.includes(userGuess);
        document.getElementById("game").innerHTML = n;
        }
    });


	

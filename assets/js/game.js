		
document.querySelector("#start").innerHTML="<h2>How's It Hangin'?</h2>" + "<p>Press &lt;enter&gt; to start the game.</p>"; 

	$(document).keyup( function(e) {
		switch(e.which) {
			case 13:
		//pick an answer
		var computerChoices = ["stark", "lannister", "targaryen", "tully", "martell", "greyjoy", "baratheon", "tyrell", "drogo", ""];				
		var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

		document.querySelector("#sandbox").innerHTML="<h3>" + computerGuess + "</h3>";
	}

	for (i = 0, i < computerGuess.length; i++) {
		var blank = $("<div>")

		$(blank).addClass("h3");
		$(blank).text(computerGuess[i]);
		$("#sandbox").append(blank);

	}
});


	

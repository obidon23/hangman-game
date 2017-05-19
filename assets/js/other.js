<script type="text/javascript">
			


				var wins = 0;
				var guessesRemaining = 6;
				var lastGuess;
				var correctGuess;
				var wrongGuess;
				// wins counter

				// starting the game
				
				// Computer Selects a Solution					}
				var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

				document.write(computerChoices);	

				// letters you've guessed
				if ((currentGuess = "A") || ((currentGuess = "B") || ((currentGuess = "C") || ((currentGuess = "D") || ((currentGuess = "E") || ((currentGuess = "F") || ((currentGuess = "G") || ((currentGuess = "H") || ((currentGuess = "I") || ((currentGuess = "J") || ((currentGuess = "K") || ((currentGuess = "L") || ((currentGuess = "M") || ((currentGuess = "N") || ((currentGuess = "O") || ((currentGuess = "P") || ((currentGuess = "Q") || ((currentGuess = "R") || ((currentGuess = "S") || ((currentGuess = "T") || ((currentGuess = "U") || ((currentGuess = "V") || ((currentGuess = "W") || ((currentGuess = "X") || ((currentGuess = "Y") || ((currentGuess = "Z"))
				// guesses remaining

		         	 // Here we create the HTML that will be injected into our div and displayed on the page.
      					var html = "<p>Pick a letter to start playing!</p>" +
      					"<p>Wins: " + wins + "</p>" +
     					 "<p>Current Word:" + "<br />" +
      					computerChoices" + </p>" + "<br />" +
      					"<p>You have " + remainingGuesses + " guesses remaining.</p>" + "<br />" +
      					"<p>Letters you have guessed so far: " + currentGuess;

         		 // Injecting the HTML we just created into our div and updating the game information on our page.
          			document.querySelector("#game").innerHTML = html;

        }
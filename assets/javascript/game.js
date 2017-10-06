

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0; 

var losses = 0;

var guessesLeft = 9;

var allGuesses = "";

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function(event) {

	var userGuess = event.key;

	userGuess = userGuess.toLowerCase();

	console.log("User Guess: " + userGuess);
	console.log("Computer Guess: " + computerGuess);


	if (userGuess === computerGuess) {
		wins++;
		console.log("User wins: " + wins);
		guessesLeft = 9;
		allGuesses = "";
		userGuess = "";
		console.log("Guesses left: " + guessesLeft);
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	}
		else {
				guessesLeft--;
				console.log("Guesses left: " + guessesLeft);

		}
	
	
	allGuesses = allGuesses + " " + userGuess;


	if (guessesLeft === 0) {
		losses++;
		console.log("User losses: " + losses);
		guessesLeft = 9;
		allGuesses = "";
		computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	}
		
	var html = 
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" + 
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Guesses so far: " + allGuesses + "</p>";

	document.querySelector("#game").innerHTML = html;
		
}


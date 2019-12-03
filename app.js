var letters = ["a", "b", "c", "d", "e"];
console.log(letters);

var guessed_letters = [];
var randomletter = null;
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var NewGuessesLeft = function () {
    document.querySelector("guesses-left").innerHTML = guessesLeft;
};

var randomLettertoGuess = function () {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
};

var LettersGuessedSoFar = function () {
    document.querySelector("#guessed_letters").innerHTML = guessed_letters.join(", ");
};

var reset = function () {
    guessesLeft = 9;
    guessed_letters = [];
    NewGuessesLeft();
    randomLettertoGuess();
    LettersGuessedSoFar();
};

NewGuessesLeft();
randomLettertoGuess();

document.onkeydown = function (event) {
    guessesLeft--;
    var letter = event.key.toLowerCase();
    guessed_letters.push(letter);

    randomLettertoGuess();
    LettersGuessedSoFar();

    if (letter === randomLetter) {
        wins++;
        document.querySelector("#win").innerHTML = wins;
        reset();
    }
    if (guessesLeft === 0) {
        lose++;
        document.querySelector("#lose").innerHTML = losses;
        reset();
    }
};



// JS document
let $ = function (currentDog) {
  return document.getElementById(currentDog);
}

//create alphabet array
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// create arrays
const doggos = ["german shepherd", "australian terrier", "siberian husky", "pomeranian", "great dane", "golden retriever", "blue texas heeler"];

// let word = doggos[Math.floor(Math.random() * doggos.length)];
let choice = Math.floor(Math.random() * doggos.length);
let answer = doggos[choice];
let wordToGuess = answer.length;
let display = [wordToGuess]; //what is being guessed
let win = wordToGuess; // match to win
let letters = answer.split(" "); // hide characters
let attemptsLeft = 10; //guesses left
let output = ""; //hide characters
let userLetter = ""; //create an array to hold user input
let treats = 0; // win counter
let spanks = 0; // loss counter

// let win = word;

// create current dog
let setup = function () {
  for (var i = 0; i < answer.length; i++) {
    display[i] = " _ ";
    output = output + display[i];
  }
  document.getElementById("currentDog").innerHTML = output;
  output = " ";
}

//create the loops for the game
var submit = function () {

  output = "";
  userLetter = $("letter").value;
  $("letter").value = "";

  for (let a = 0; a < answer.length; i++) {
    alert(letters[a]);
    if (userLetter.toLowerCase() == letters[a]) {
      display[a] = userLetter.toLowerCase();
      win--;
    }
    output = output + display[a] + " ";
  }

  document.getElementById ("currentDog").innerHTML = output;
  output="";
  attemptsLeft--;


  //conditions to add win/loss
  if (win < 1){
    document.getElementById ("guessesRemaining").innerHTML = "Winner";
  }
  else if (attemptsLeft < 1){
    document.getElementById ("guessesRemaining").innerHTML = "Loser";
  }
  else{
    document.getElementById ("guessesRemaining").innerHTML = "You have " + attemptsLeft + "guesses remaining.";
  }

/*  while-loop
while (remainingLetters > 0) {
  let guessesRemaining = document.getElementById("guessesRemaining");
  guessesRemaining.innerHTML = answerArray.join(" ");
  let playerGuess = prompt("choose a letter or click cancel.");
  if (playerGuess === null) {
    break;
  }
  else if (playerGuess !=== 1) {
    alert("please choose a single variable");
  }
  else {
    for (let a = 0; a < word.length; a++) {
      if (word[a] === playerGuess) {
        answerArray[a] = playerGuess;
        remainingLetters--;
      }
    }
  }

}

currentDog.innerHTML = answerArray.join(" ";);

let currentDog = document.getElementById ("currentDog");
  //currentDog.innerHTML = answerArray.join(" ");*/



}
// create answer blanks array

// create the game loops

// Show the player their progress

// Take input from the player

// Update answerArray and remainingLetters for every correct guess




window.onload = function () {
  setup();
}
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
let display = [wordToGuess];
let win = wordToGuess;
let letters = answer.split(" ");
let attemptsLeft = 10;
let output = "";
let userLetter = "";

// let win = word;

// create current dog function
let setup = function () {
  for (var i = 0; i < answer.length; i++) {
    display[i] = " _ ";
    output = output + display[i];
  }
  document.getElementById("currentDog").innerHTML = output;
  output = " ";
}

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

  if (win < 1){
    document.getElementById ("guessesRemaining").innerHTML = "Winner";
  }
  else if (attemptsLeft < 1){
    document.getElementById ("guessesRemaining").innerHTML = "Loser";
  }
  else{
    document.getElementById ("guessesRemaining").innerHTML = "You have " + attemptsLeft + "guesses remaining.";
  }




}




window.onload = function () {
  setup();
}
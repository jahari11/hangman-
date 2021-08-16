//KEY//
const prompt = require("readline-sync");
const wordBank = require("./word-bank.json");
const alphabet = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z']; 
const letter;
const randomWordGen;
const hangMan;
const checkUserAnswer;
let correctWord;
let incorrectWord;
let rounds;
let guesses;



const rounds = () => {
  if (newRound === 1){
    console.log(`Welcome to round number ${newRound} !`);


  }
  else {
    console.log (`Round number: ${newRound}`);

  }
}

// ----
//---->Random word generator 
//----
const randomWordGen = () => wordBank[Math.floor(Math.random()*wordBank.length)];
let choosenWord = wordBank[letter];
let correctWord = [];
let incorrectWord = [];


// ----
//---->Generates underscore based on word length
// ----
let underScore = [];
let generateUnderScore = () => {
  for (let i = 0; i < choosenWord.length; i++){
    if (choosenWord[i] != ' '){
      underScore.push('_');

    }
    else {
      underScore.push(' ');
    }
  }
  return underScore;
};

// ----
//----> Get users guess
// ----
let guesses = 0;
let wrongGuesses = 0;

const userGuess = () => {
  const userInput = prompt.question("Please guess a letter: ");
  
  if (/[a-zA-Z]/.test(userInput)) {
  function checkUserAnswer(answer){
    wrongGuesses++;
  }
  } else if (/[^a-zA-Z]/.test(userInput)) {

    console.log("This is NOT a letter. Please use a letter.");
  }
  userGuess();
  

}

// ----
//-----> Check if the guess is correct
// ----

const displayHangman = () =>{
  while(guesses<=6){
  if (wrongGuesses===0){
    console.log(`'''
    +---+
    |   |
        |
        |
        |
        |
  ========='''`);
  } else if (wrongGuesses===1){
    console.log(`'''
    +---+
    |   |
    O   |
        |
        |
        |
  ========='''`);
  }
  if (wrongGuesses===2) {
    console.log(`'''
    +---+
    |   |
    O   |
    |   |
        |
        |
  ========='''`);
  }

  else if (wrongGuesses===3) {
    console.log(`'''
    +---+
    |   |
    O   |
   /|   |
        |
        |
  ========='''`);
  }
  if (wrongGuesses===4) {
    console.log(`'''
    +---+
    |   |
    O   |
   /|\  |
        |
        |
  ========='''`);
  }

  else if (wrongGuesses===5){
    console.log(`'''
    +---+
    |   |
    O   |
   /|\  |
   /    |
        |
  ========='''`);
  }
  if (wrongGuesses===6){
    console.log(`'''
    +---+
    |   |
    O   |
   /|\  |
   / \  |
        |
  ========='''`);
  }
  guesses++;
}
//---> pushes word to either correct or incorrect array

if(choosenWord.indexOf(userLetter)>-1){
  correctWord.push(userLetter);

}
if (userLetter==choosenWord) { 
  console.log('You win');
  
}
else {
  incorrectWord.push(userLetter);
  console.log('Incorrect guess');
  rounds();
}
userGuess();
}
rounds();

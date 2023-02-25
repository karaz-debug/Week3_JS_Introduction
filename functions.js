/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Convert to Arrow Function  🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Take the commented ES5 syntax and convert it to ES6 arrow Syntax



function myFunction() {
  console.log("Function was invoked!");
};

myFunction();

// Converted to arrow function
const myFunctions = () => (console.log("Function was invoked!"))



let anotherFunction = function (param) {
  return param;
};

anotherFunction("Example");

// coverted   anotherFunction in arrow function;
let anotherFunctions = (param) => (param)


let add = function (param1, param2) {
  return param1 + param2;
};

add(1, 2);

// Converted add to arrow fucntion
let adds = (param1, param2) => (param1 + param2)

adds(3, 4)




/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task: Rock, Paper, Scissors - Let's play against the computer! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

/*
Create a global variable that randomly generates the computer's choice
Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
Use the game function below to do the following:
  1. Receive 2 parameters the user's choice and the computer's choice
  2. Return whether the user won, lost, or tied based on these rules of the game described below - the strings returned need to match the strings below exactly.
   - win should return "you win!"
   - lose should return "you lose!"
   - tie should return "it's a tie"

  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie

  HINT: Remember that the order in which we pass in our arguments matters when it comes to parameters
*/

function computerChoice() {
  const randomcomputerChoice = ['Scissors', 'Paper', 'Rock'];
  const randomNumber = Math.floor(Math.random() * randomcomputerChoice.length);
  return computerChoice[randomNumber];
}

function userChoice() {
  let userInput = prompt("Choose rock, paper, or scissors.").toLowerCase();

  while (userInput !== "Scissors" && userInput !== "Paper" && userInput !== "Rock") {
    userInput = prompt("Invalid choice! Please choose rock, paper, or scissors.").toLowerCase();
  }

  return userInput;
}

function game(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "it's a tie";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    return "you win!";
  } else {
    return "you lose!";
  }
}

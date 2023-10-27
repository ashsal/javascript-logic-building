const prompt = require("prompt-sync")();

const rock = 1;
const paper = 2;
const scissors = 3;

const names = {
    1: "Rock",
    2: "Paper",
    3: "Scissors"
}

let exit = false;
let computerScore = 0;
let userScore = 0;
while(!exit) {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    let userChoice = prompt(`Please select one of the below options
    1. Press 1 for ROCK
    2. Press 2 for PAPER
    3. Press 3 for SCISSORS
    4. Press 4 for exit
    `);
    // Add validation to test if user has chosen the correct value
    userChoice = parseInt(userChoice);

    if(userChoice === 4) {
        exit = true;
    }
    else if(userChoice === computerChoice) {
        console.log("Its a tie!!")
    }
    else if((userChoice === rock && computerChoice === scissors) ||
        (userChoice === paper && computerChoice === rock) ||
        (userChoice === scissors && computerChoice === paper)) {
        userScore++;
        console.log("You win!!", "Your choice : ", names[userChoice], "Computer choice: ", names[computerChoice]);
    }
    else {
        computerScore++;
        console.log("Computer win!!", "Your choice : ", names[userChoice], "Computer choice: ", names[computerChoice]);
    }
}


console.log("Thanks for playing!!");
console.log("End score is User: ", userScore, " Computer: ", computerScore);

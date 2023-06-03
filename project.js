
const computerChoice = '';
let computerCount = 0;
let playerCount = 0;

function getComputerChoice(computerChoice) {
    const random = Math.floor(Math.random() * 3); 
    if (random == 0) {
        computerChoice = 'scissors'
    } else if (random == 1) {
        computerChoice = 'paper'
    } else {
        computerChoice = 'rock'
    }
    return computerChoice;
}

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('Rock Paper Scissors');
    playerSelection = playerSelection.toLowerCase(); 

    if (playerSelection == "rock" && computerSelection == "paper") {
        alert ('Paper beats Rock');
        computerCount ++;
    } 
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ('Scissors beats Paper');
        playerCount ++;
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        alert ('Paper vs Paper');
    }


    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert ('Rock beats Scissors');
        playerCount ++; 
    }
     else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert ('Scissors vs Scissors');
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ('Scissors beats Paper');
        computerCount ++;
    }


    else if (playerSelection === "rock" && computerSelection === "rock") {
        alert ('Rock vs Rock');
         
    }
     else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ('Rock beats Scissors');
        computerCount ++;
    }
    else if (playerSelection !== "scissors" && playerSelection !== "rock" && playerSelection !== "paper") {
        alert('Invalid word, game restarted');
        game();
    }
     else  {
        alert ('Paper beats Rock');
        playerCount ++;
    } 
    return playerCount;
}

function game() {
    computerCount = 0;
    playerCount = 0;

    let rounds = 5;
    for (let i = 0; i < rounds; i++) {
           console.log(playRound(playerSelection, getComputerChoice(computerChoice)));
    }
    defineWinner(playerCount, computerCount);
}

function defineWinner(playerCount, computerCount) {
    if (playerCount > computerCount) {
        alert ('Congrats! You Won!')
    } else if (playerCount == computerCount) {
        alert ('Tie')
    } else {
        alert('Computer wins!')
    }
}

const playerSelection = '';
const computerSelection = getComputerChoice(computerChoice);
// console.log(playRound(playerSelection, computerSelection));
game()
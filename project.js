// let rock = 'Rock'
// let paper = 'Paper'
// let scissors = 'Scissors'

function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return 'scissors'
    } else if (computerChoice == 1) {
        return 'paper'
    } else {
        return 'rock'
    }
}

getComputerChoice()


function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log('You Lose! Paper beats Rock')
        return 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log('You Won!')
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log('A tie!')
    }


    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log('You Won!')
        return 
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log('A tie!')
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log('You Lose! Scissors beats Paper')
    }


    else if (playerSelection == "rock" && computerSelection == "rock") {
        console.log('A tie!')
        return 
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log('You Lose! Rock beats Scissors')
    }
    else  {
        console.log('You Won!')
    }   
    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
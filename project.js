
const computerChoice = '';
let computerCount = 0;
let playerCount = 0;
let winner = false;

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

    if(winner) {
        computerCount = 0;
        playerCount = 0;
        congrats.textContent = '';
        winner = false;
    }

    if (playerSelection == "rock" && computerSelection == "paper") {
        alert ('Paper beats Rock');
        computerCount ++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert ('Scissors beats Paper');
        playerCount ++;
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        alert ('Paper vs Paper');
    }


    else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert ('Rock beats Scissors');
        playerCount ++; 
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        alert ('Scissors vs Scissors');
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert ('Scissors beats Paper');
        computerCount ++;
    }


    else if (playerSelection === "rock" && computerSelection === "rock") {
        alert ('Rock vs Rock');
         
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert ('Rock beats Scissors');
        computerCount ++;
    } else  {
        alert ('Paper beats Rock');
        playerCount ++;
    } 
    // console.log(playerCount);
    // console.log(computerCount);
    // console.log(playerSelection)
    // console.log(computerSelection)
    defineWinner(playerCount, computerCount);

}


function defineWinner(playerCount, computerCount) {
    if (playerCount === 5) {
        congrats.textContent = 'You Won!';
        congrats.style.backgroundColor = 'green';
        congrats.style.fontSize = '2rem';
        winner = true;
    } else if (computerCount === 5) {
        congrats.textContent = 'You Lose!';
        congrats.style.backgroundColor = 'red';
        congrats.style.fontSize = '2rem';
        winner = true;
    } 
}

const playerSelection = '';
const rps = document.querySelector('.rps');

const score = document.createElement('div');
score.classList.add('score');
rps.appendChild(score);


const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice(computerChoice))
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice(computerChoice))
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice(computerChoice))
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        score.style.color = 'white';
        score.textContent = `Your current score is: ${playerCount} / Computer score is: ${computerCount}`;
    })
})


const congrats = document.createElement('div');
rps.appendChild(congrats) 



const computerSelection = getComputerChoice(computerChoice);

let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let AIchoice = document.getElementById('right').querySelector('button');


function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let randomPlay = options[Math.floor(Math.random() * options.length)];
    const buttons = document.querySelectorAll('#right button');
    let number = options.indexOf(randomPlay);
    console.log(randomPlay);
    console.log(number);
    buttons[`${number}`].classList.add('selected');
}

function playerChoice() {
    let playerInput = prompt('choose Rock, Paper, or Scisscors').toLowerCase();
    if (playerInput == 'rock') {
        return 'rock';
    } else if (playerInput == 'paper') {
        return 'paper';
    } else if (playerInput == 'scissors') {
        return 'scissors';
    } else {
        return prompt('CHOOSE ROCK, PAPER, OR SCISSORS!! cunt');
    }
}

function playRound(playerSelection, computerSelection) {

    let winMessage = `YOU WON! You picked ${playerSelection}. AI picked ${computerSelection}. ${playerSelection} beats ${computerSelection}!`;
    let loseMessage = `YOU LOST! You picked ${playerSelection}. AI picked ${computerSelection}. ${computerSelection} beats ${playerSelection}!`;

    if (playerSelection == computerSelection) {
        tieScore++;
        return `It's a tie. You both picked ${playerSelection}`

    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        return winMessage;

    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        return loseMessage;
    }
}


// function game() {

// 	for(let gameCount = 0; gameCount < 5; gameCount++){
// 		console.log(playRound(playerChoice(), computerPlay()));
// 		console.log(`YOU - ${playerScore} vs - AI - ${computerScore}  TIES - ${tieScore}`);
// 		console.log(`Number of games played ${gameCount +1}`);
// 	}
// }

// game();
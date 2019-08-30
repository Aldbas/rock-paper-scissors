let playerScore = 0;
let computerScore = 0;
let gameCount = 0; 
const playerBox = document.querySelector('p[data-box="player"]');
const AIBox = document.querySelector('p[data-box="AI"]');
const allbuttons = document.querySelectorAll('button');
const buttons = document.querySelectorAll(`#left .buttons`);

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let randomPlay = options[Math.floor(Math.random() * options.length)];
    const buttons = document.querySelectorAll('#right button');
    let number = options.indexOf(randomPlay);
    buttons[`${number}`].classList.toggle('selected');
    return randomPlay;
}



function playRound(playerSelection, computerSelection) {
    let winMessage = `YOU WON! You picked ${playerSelection}. AI picked ${computerSelection}. ${playerSelection} beats ${computerSelection}!`;
    let loseMessage = `YOU LOST! You picked ${playerSelection}. AI picked ${computerSelection}. ${computerSelection} beats ${playerSelection}!`;
    let display = document.createElement('p');
    let result = document.getElementById('results');

    if (playerSelection == computerSelection) {    
        display.textContent =
            `It's a tie. You both picked ${playerSelection}!!`;
        result.appendChild(display);



    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
       	display.textContent = winMessage;
        results.appendChild(display);
        playerBox.textContent = playerScore;


    } else if (playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors' ||
        playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++;
         display.textContent = loseMessage;
        results.appendChild(display);
        AIBox.textContent = computerScore;
    }
    gameCount++;
    gameCheck();
}

buttons.forEach(button => button.addEventListener('click', function(e) {
    let playerSelection = (e.target.textContent.toLowerCase());
    e.target.classList.toggle('selected');
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}));

allbuttons.forEach(button => button.addEventListener('transitionend', resetClasses));

function resetClasses(event) {
	if(event.propertyName !== 'transform')  return;
		this.classList.remove('selected');

}

function gameCheck() {
	if( gameCount == 5 && playerScore == computerScore) {
		const tie = document.createElement('h4');
		tie.textContent = "You've TIED WITH THE AI!!";
		results.appendChild(tie);
		allbuttons.forEach(button => button.disabled = true);
	}
	else 
		if(gameCount == 5 && playerScore > computerScore) {
		const win = document.createElement('h3');
		win.textContent = 'YOU BEAT AI!! CONGRATS';
		results.appendChild(win);
		allbuttons.forEach(button => button.disabled = true);
	}
	else if (gameCount == 5 && playerScore < computerScore) {
		const lost = document.createElement('h3');
		lost.textContent = 'YOU LOST TO AI!! BETTER LUCK NEXT TIME';
		results.appendChild(lost);
		allbuttons.forEach(button => button.disabled = true);
	}

}

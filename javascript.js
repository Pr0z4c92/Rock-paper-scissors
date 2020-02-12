

let gameRounds = 1; 

while (gameRounds < 5) {
    console.log(`round ${gameRounds}`);
    gameRounds++;
    console.log(playerSelection());
    console.log(computerSelection());
}

let firstLevel = playerSelection();
let secondLevel = computerSelection();
let thirdStage = gameRules();

function playerSelection() {
    let selection = prompt('Can you win?', 'Rock, Paper or Scissors');
    if (selection.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (selection.toLowerCase() === 'paper') {
        return 'Paper';
    } else if ( selection.toLowerCase() === 'scissors') {
        return 'Scissors';
    } else return 'Not applicable'; 
}

function computerSelection() {
    let computer = ['Rock', 'Paper', 'Scissors'];
    let selection = computer[Math.floor(Math.random([]) * computer.length)];
    return selection;
}

/* not working i've givven up pn it
function gameRules() {
    /* Player  if (firstLevel === ('Rock') && secondLevel === ('Scissors')) {
        return 'win';
    } else if (firstLevel === ('Paper') && secondLevel === ('Rock')) {
        return 'win';
    } else if (firstLevel === ('Scissors') && secondLevel === ('Paper')) {
        return 'win';
    } /* Computer  else if (secondLevel === ('Rock') && firstLevel === ('Scissors')) {
        return 'lose';
    } else if (secondLevel === ('Paper') && firstLevel === ('Rock')) {
        return 'lose';
    } else if (secondLevel === ('Scissors') && firstLevel === ('Paper')) {
        return 'lose';
    } /* Draw   else if (firstLevel === ('Paper') && secondLevel === ('Paper')) {
        return 'draw';
    } else if (firstLevel === ('Rock') && secondLevel === ('Rock')) {
        return 'draw';
    }else if (firstLevel === ('Scissors') && secondLevel === ('Scissors')) {
        return 'draw';
    } else return 'Do you want to play or not?';
} */



let firstLevel = PlayerSelection();
let secondLevel = computerSelection();
let finalStage = gameRules();

function PlayerSelection() {
    let selection = prompt('Can you win?', 'Rock, Paper or Scissors');
    if (selection.toLowerCase() === 'rock') {
        return 'Rock';
    } else if (selection.toLowerCase() === 'paper') {
        return 'Paper';
    } else if ( selection.toLowerCase() === 'scissors') {
        return 'Scissors';
    } else return 'Computer wins by default, you suck mate!'
}

function computerSelection() {
    let computer = ['Rock', 'Paper', 'Scissors'];
    let selection = computer[Math.floor(Math.random([]) * computer.length)];
    return selection;
}

function gameRules() {
    /* Player */ if (firstLevel === ('Rock') && secondLevel === ('Scissors')) {
        return 'Guess you win this round!';
    } else if (firstLevel === ('Paper') && secondLevel === ('Rock')) {
        return 'Guess you win this round!';
    } else if (firstLevel === ('Scissors') && secondLevel === ('Paper')) {
        return 'Guess you win this round!';
    } /* Computer */ else if (secondLevel === ('Rock') && firstLevel === ('Scissors')) {
        return 'Guess Larry gengrich wins this round!';
    } else if (secondLevel === ('Paper') && firstLevel === ('Rock')) {
        return 'Guess Larry gengrich wins this round!';
    } else if (secondLevel === ('Scissors') && firstLevel === ('Paper')) {
        return 'Guess Larry gengrich wins this round!';
    } /* Draw */  else if (firstLevel === ('Paper') && secondLevel === ('Paper')) {
        return 'whoops. That look like draw to me, better luck next time!!';
    } else if (firstLevel === ('Rock') && secondLevel === ('Rock')) {
        return 'whoops. That look like draw to me, better luck next time!!';
    }else if (firstLevel === ('Scissors') && secondLevel === ('Scissors')) {
        return 'whoops. That look like draw to me, better luck next time!!';
    } 
}

console.log(firstLevel);
console.log(secondLevel);
console.log(finalStage);


/* let randomNumber = Math.floor(Math.random() * 75) + 1;
let firstChoice = prompt('Rock, Paper or scissors?');
let player1 = firstChoice.toLowerCase();

if (player1 === 'rock') {
        let Rock = 'Rock';
    }  else if (player1 === 'paper') {
        let Paper ='Paper';
    }  else if (player1 === 'scissors') {
        let Scissors = 'Scissors';
    }  else {
        console.log('Computer wins by default')
    }

if (randomNumber <= 25) {
        let Paper = 'paper';
    } else if (randomNumber <= 50){
        let Scissors = 'scissors';
    } else {
    } let Rock = 'rock';

if (player1 == 'rock' && randomNumber == 'Scissors') {
    console.log("Player one wins");
} else if (player1 == 'paper' && randomNumber == Rock) {
    console.log("Player one wins");
} else if (player1 == 'scissors' && randomNumber == Paper) {
    console.log("Player one wins");
} else if (randomNumber == Scissors && player1 == 'paper') {
    console.log("computer wins");
} else if (randomNumber == Paper && player1 == 'rock') {
    console.log("Computer wins");
} else if (randomNumber == Rock && player1 == 'scissors') {
    console.log("Computer wins");
} else {
    console.log("draw");
} */ 
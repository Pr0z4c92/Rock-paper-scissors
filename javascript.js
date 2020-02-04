let randomNumber = Math.floor(Math.random() * 75) + 1;

function computerPlay() {
    if (randomNumber <= 25) {
        return 'Paper';
    } else if (randomNumber <= 50){
        return 'Scissors';
    }
    return 'Rock';
}



console.log(computerPlay());
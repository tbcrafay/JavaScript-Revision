let rock = document.querySelector(".btn1");
let paper = document.querySelector(".btn2");
let scissors = document.querySelector(".btn3");

function Judge(playerMove) {
    let result = '';

    // Generate a new random computer move each time

    if (playerMove === computerMove) {
        result = 'Tie';
    } else if ((playerMove === 'rock' && computerMove === 'paper') ||
               (playerMove === 'paper' && computerMove === 'scissors') ||
               (playerMove === 'scissors' && computerMove === 'rock')) {
        result = 'You Lose';
    } else {
        result = 'You Win';
    }

    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
    return result;
}

rock.addEventListener("click", () => Judge("rock"));
paper.addEventListener("click", () => Judge("paper"));
scissors.addEventListener("click", () => Judge("scissors"));
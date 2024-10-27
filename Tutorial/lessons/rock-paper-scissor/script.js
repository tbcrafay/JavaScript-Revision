let rock = document.querySelector(".btn1");
let paper = document.querySelector(".btn2");
let scissors = document.querySelector(".btn3");
let score_board = document.querySelector(".score_board");
let reset = document.querySelector(".Reset");

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

reset.addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score)); // Update localStorage
    score_board.innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
});

function Judge(playerMove) {

    const computerMove = pickComputerMove();

    let result = '';

    // Generate a new random computer move each time

    if (playerMove === computerMove) {
        result = 'Tie';
        score.ties++;
    } else if ((playerMove === 'rock' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'rock')) {
        result = 'You Lose';
        score.losses++;
    } else {
        result = 'You Win';
        score.wins++;
    }


    localStorage.setItem('score', JSON.stringify(score));

    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);

    score_board.innerText = `You picked ${playerMove}. Computer picked ${computerMove}. ${result} Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} `;

    return result;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

rock.addEventListener("click", (event) => {
    event.preventDefault();
    Judge("rock");
});

paper.addEventListener("click", (event) => {
    event.preventDefault();
    Judge("paper");
});

scissors.addEventListener("click", (event) => {
    event.preventDefault();
    Judge("scissors");
});
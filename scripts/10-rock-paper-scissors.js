const score = JSON.parse(localStorage.getItem("new")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElem();

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";

  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  document.querySelector(
    ".js-choices"
  ).innerHTML = `You <img class="move-img" src="images/${playerMove}-emoji.png"> <img class="move-img" src="images/${computerMove}-emoji.png"  alt="">Computer`;

  document.querySelector(".js-result").innerHTML = result;

  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.losses++;
  } else {
    score.ties++;
  }
  localStorage.setItem("new", JSON.stringify(score));

  updateScoreElem();

  // alert(
  //   `You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n Wins:${score.wins} Losses:${score.losses} Ties:${score.ties} `
  // );
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
  return computerMove;
}

function updateScoreElem() {
  const scoreShow = document.querySelector(".js-score");

  scoreShow.innerHTML = `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;
}

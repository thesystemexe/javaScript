const score = JSON.parse(localStorage.getItem("new")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElem();

let isAutoPlay = false;
let intervalID;
const autoElement = document.querySelector(".alt-auto");

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    autoPlay();
  }
});

const autoPlay = () => {
  if (!isAutoPlay) {
    autoElement.innerHTML = "Stop playing";
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlay = true;
  } else {
    autoElement.innerHTML = "Auto Play";

    clearInterval(intervalID);
    isAutoPlay = false;
  }
};
autoElement.addEventListener("click", () => {
  autoPlay();
});

// function autoPlay() {
//   if (!isAutoPlay) {
//     intervalID = setInterval(() => {
//       const playerMove = pickComputerMove();
//       playGame(playerMove);
//     }, 1000);
//     isAutoPlay = true;
//   } else {
//     clearInterval(intervalID);
//     isAutoPlay = false;
//   }
// }

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissors");
    r;
  }
});

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
  ).innerHTML = `You <img class="move-img" src="../images/${playerMove}-emoji.png"> <img class="move-img" src="../images/${computerMove}-emoji.png"  alt="">Computer`;

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

const resetScore = () => {
  (score.wins = 0), (score.losses = 0), (score.ties = 0);
  localStorage.removeItem("new"), updateScoreElem();
};

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    resetScore();
  }
});

const resetButton = document.querySelector(".alt-reset");

resetButton.addEventListener("click", () => {
  resetScore();
});

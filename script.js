const string1 = "rock";
const string2 = "paper";
const string3 = "scissors";

function getUserChoice(str1, str2, str3) {
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");

  rockButton.addEventListener("click", function () {
    handleUserChoice(str1);
  });

  paperButton.addEventListener("click", function () {
    handleUserChoice(str2);
  });

  scissorsButton.addEventListener("click", function () {
    handleUserChoice(str3);
  });
}

let playerChoice; // Store user's choice

function handleUserChoice(choice) {
  playerChoice = choice; // Store user's choice for the current round

  const computerChoice = getComputerChoice(string1, string2, string3);

  const result = playRound(playerChoice, computerChoice);
  displayResult(playerChoice, computerChoice, result);
  updateScore(result);
  checkGameEnd();
}

function getComputerChoice(str1, str2, str3) {
  const randomNumber = Math.floor(Math.random() * 3);

  let result;

  if (randomNumber === 0) {
    result = str1;
  } else if (randomNumber === 1) {
    result = str2;
  } else if (randomNumber === 2) {
    result = str3;
  }

  return result;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Invalid input") {
    return "Invalid input. Please enter either 'rock', 'paper', or 'scissors'.";
  }

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  if (
    (playerSelection === string1 && computerSelection === string3) ||
    (playerSelection === string2 && computerSelection === string1) ||
    (playerSelection === string3 && computerSelection === string2)
  ) {
    return "Player wins!";
  }

  return "Computer wins!";
}

function displayResult(playerChoice, computerChoice, result) {
  const resultContainer = document.getElementById("result-container");

  const roundResult = document.createElement("p");
  roundResult.textContent = `Player's choice: ${playerChoice}, Computer's choice: ${computerChoice}, Result: ${result}`;

  resultContainer.appendChild(roundResult);
}

function updateScore(result) {
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const tiesScoreDisplay = document.getElementById("ties-score");

  if (result === "Player wins!") {
    playerScoreDisplay.textContent = parseInt(playerScoreDisplay.textContent) + 1;
  } else if (result === "Computer wins!") {
    computerScoreDisplay.textContent = parseInt(computerScoreDisplay.textContent) + 1;
  } else {
    tiesScoreDisplay.textContent = parseInt(tiesScoreDisplay.textContent) + 1;
  }
}

function checkGameEnd() {
  const playerScoreDisplay = document.getElementById("player-score").textContent;
  const computerScoreDisplay = document.getElementById("computer-score").textContent;

  if (parseInt(playerScoreDisplay) === 5 || parseInt(computerScoreDisplay) === 5) {
    const gameResult = document.createElement("p");
    gameResult.textContent = parseInt(playerScoreDisplay) === 5 ? "Player wins the game!" : "Computer wins the game!";

    const resultContainer = document.getElementById("result-container");
    resultContainer.appendChild(gameResult);

    // Disable button clicks after the game ends
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let tiesScore = 0;

  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");
  const tiesScoreDisplay = document.getElementById("ties-score");

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  tiesScoreDisplay.textContent = tiesScore;

  getUserChoice(string1, string2, string3);
}

game();
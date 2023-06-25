const string1 = "rock";
const string2 = "paper";
const string3 = "scissors";

function getUserChoice(str1, str2, str3) {
  const userInput = prompt("Enter either 'rock', 'paper', or 'scissors':").toLowerCase();

  let result;

  if (userInput === str1 || userInput === str2 || userInput === str3) {
    result = userInput;
  } else {
    result = "Invalid input";
  }

  return result;
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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = getUserChoice(string1, string2, string3);
    console.log("Round", round);
    console.log("User's choice:", playerSelection);

    const computerSelection = getComputerChoice(string1, string2, string3);
    console.log("Computer's choice:", computerSelection);

    const result = playRound(playerSelection, computerSelection);
    console.log("Round result:", result);

    if (result === "Player wins!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }

    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
    console.log("----------------------");
  }

  console.log("Final result:");
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

game();
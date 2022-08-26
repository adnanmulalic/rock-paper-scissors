function getComputerChoice() {
    let rndNum = Math.floor(Math.random() * 3);
    if (rndNum === 0) {
        return "rock";
    } else if (rndNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
function gameRound(userChoice, compChoice) {
    if (userChoice === compChoice) {
    return "Tie";
  } else if (userChoice === "rock" && compChoice === "paper") {
    return "Computer wins";
  } else if (userChoice === "paper" && compChoice === "scissors") {
    return "Computer wins";
  } else if (userChoice === "scissors" && compChoice === "rock") {
    return "Computer wins";
  } else if (compChoice === "rock" && userChoice === "paper") {
    return "User wins";
  } else if (compChoice === "paper" && userChoice === "scissors") {
    return "User wins";
  } else if (compChoice === "scissors" && userChoice === "rock") {
    return "User wins";
  }
}

/* function game() {
    let userScore = 0;
    let compScore = 0;
    while (userScore < 5 && compScore < 5) {
      let compChoice = getComputerChoice();
      let userChoice = getUserChoice;
      console.log(userChoice);
      let result = gameRound(userChoice, compChoice);  
          if (result === "Computer wins") {
              console.log("Computer gets point");
              compScore++;
          }  else if (result === "User wins"){
              console.log("User gets point");
              userScore++;
          } else {
              console.log("No one gets point");
          }
    }
console.log(`Score: User ${userScore} vs Computer ${compScore}`);
if (userScore > compScore) {
    console.log(`User wins.`);
  } else if (compScore > userScore) {
    console.log(`Computer wins.`);
  } else {
    console.log("Its a tie");
  }
}
 */
let getUserChoice = "";
let userScore = 0;
let compScore = 0;
let playerScoreTicker = document.querySelector("#player");
let computerScoreTicker = document.querySelector("#computer");
let currentWinner = document.querySelector("#current-winner")

const rockBtn = document.querySelector('#btn-rock');
rockBtn.addEventListener("click", () => {
  getUserChoice = "rock";
})
const paperBtn = document.querySelector('#btn-paper');
paperBtn.addEventListener("click", () => {
  getUserChoice = "paper";
})
const scissorsBtn = document.querySelector('#btn-scissors');
scissorsBtn.addEventListener("click", () => {
  getUserChoice = "scissors";
})


document.querySelector(".buttons").addEventListener("click", function () {
    let compChoice = getComputerChoice();
    let userChoice = getUserChoice;
    console.log(userChoice);
    let result = gameRound(userChoice, compChoice);  
        if (result === "Computer wins") {
            console.log("Computer gets point");
            compScore++;
            computerScoreTicker.innerText = compScore;
        }  else if (result === "User wins"){
            console.log("User gets point");
            userScore++;
            playerScoreTicker.innerText = userScore;
        } else {
            console.log("No one gets point");
        }
  if (userScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    currentWinner.innerText = "User";
  } else if (compScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    currentWinner.innerText = "Computer";
  }
})

document.querySelector("#btn-restart").addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  playerScoreTicker.innerText = 0;
  computerScoreTicker.innerText = 0;
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  currentWinner.innerText = "";
})



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


function game() {
    let userScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let compChoice = getComputerChoice();
        let userChoice = prompt("Your move: ").toLowerCase();
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
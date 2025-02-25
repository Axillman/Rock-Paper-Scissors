const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
};

const getHumanChoice = () => {
    const choice = prompt("Rock, Paper or Scissors").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
};

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie!`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return;
        }

        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        return;
    };

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game!`);
        console.log(
            `Human Score: ${humanScore}. Computer Score: ${computerScore}`
        );
    }
    if (humanScore < computerScore) {
        console.log(`You lose the game!`);
        console.log(
            `Computer Score: ${computerScore}. Human Score: ${humanScore}`
        );
    }
    if (humanScore === computerScore) {
      console.log("It's a tie!");
      console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}`)
      
      
      }
};

playGame();

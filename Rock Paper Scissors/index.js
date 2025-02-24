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

humanScore = 0;
computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return `Its a tie!`;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    }

    computerScore++;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
};

const playGame = () => {
    for (let i = 0; i < 3; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game!`);
        console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}`)
    }
    if (humanScore < computerScore) {
        console.log(`You lose the game!`);
        console.log(
            `Computer Score: ${computerScore}. Human Score: ${humanScore}`
        );
    }
};

playGame();

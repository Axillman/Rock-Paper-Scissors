let score = JSON.parse(localStorage.getItem("score"));

function rockBtn() {
  let num = Math.random();

  if (num >= 0 && num < 1 / 3) {
    computerMove = "Rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    computerMove = "Paper";
  } else if (num >= 2 / 3 && num < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    results = "Tie";
  } else if (computerMove === "Paper") {
    results = "Computer Won";
  } else if (computerMove === "Scissors") {
    results = "Human Won";
  }

  updateScores();

  localStorage.setItem("score", JSON.stringify(score));

  display1ForScore();

  display2ForScore();

  display3ForScore();
}

function paperBtn() {
  let num = Math.random();

  if (num >= 0 && num < 1 / 3) {
    computerMove = "Rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    computerMove = "Paper";
  } else if (num >= 2 / 3 && num < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    results = "Human Won";
  } else if (computerMove === "Paper") {
    results = "Tie";
  } else if (computerMove === "Scissors") {
    results = "Computer Won";
  }

  updateScores();

  localStorage.setItem("score", JSON.stringify(score));

  display1ForScore();

  display2ForScore();

  display3ForScore();
}

function scissorsBtn() {
  let num = Math.random();

  if (num >= 0 && num < 1 / 3) {
    computerMove = "Rock";
  } else if (num >= 1 / 3 && num < 2 / 3) {
    computerMove = "Paper";
  } else if (num >= 2 / 3 && num < 1) {
    computerMove = "Scissors";
  }

  if (computerMove === "Rock") {
    results = "Computer Won";
  } else if (computerMove === "Paper") {
    results = "Human Won";
  } else if (computerMove === "Scissors") {
    results = "Tie";
  }

  updateScores();

  localStorage.setItem("score", JSON.stringify(score));

  display1ForScore();

  display2ForScore();

  display3ForScore();
}

function resetBtn() {
  score.Computer = 0;
  score.Human = 0;
  score.Ties = 0;
}

function updateScores() {
  if (results === "Human Won") {
    score.Human += 1;
  } else if (results === "Computer Won") {
    score.Computer += 1;
  } else if (results === "Tie") {
    score.Ties += 1;
  }
}

function display1ForScore() {
  document.getElementById(
    "display1"
  ).innerHTML = `Computer picked ${computerMove}`;
}

function display2ForScore() {
  document.getElementById("display2").innerHTML = `${results}`;
}

function display3ForScore() {
  document.getElementById(
    "display3"
  ).innerHTML = `Human: ${score.Human}. Computer: ${score.Computer}. Ties: ${score.Ties}`;
}

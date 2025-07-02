const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissors"];

while (true) {
  console.log("Choose: 'rock', 'paper', or 'scissors':");
  let input = prompt("> ").toLowerCase();

  if (!choices.includes(input)) {
    console.log("Please enter a valid input: 'rock', 'paper', or 'scissors'.");
    continue;
  }

  const randomizer = choices[Math.floor(Math.random() * 3)];
  console.log("Computer chose:", randomizer);

  // DRAW
  // if (input && randomizer === "rock") {
  //   console.log("Draw");
  //   break;
  // }
  // if (input && randomizer === "paper") {
  //   console.log("Draw");
  //   break;
  // }
  // if (input && randomizer === "scissors") {
  //   console.log("Draw");
  //   break;
  // }
  if (input === randomizer) {
    console.log("Draw!");
    break;
  }

  // LOSE
  // if (input === "rock" && randomizer === "paper") {
  //   console.log("You Lose! Try again...");
  //   continue;
  // }
  // if (input === "paper" && randomizer === "scissors") {
  //   console.log("You Lose! Try again...");
  //   continue;
  // }
  // if (input === "scissors" && randomizer === "rock") {
  //   console.log("You Lose! Try again...");
  //   continue;
  // }
  if (
    (input === "rock" && randomizer === "paper") ||
    (input === "paper" && randomizer === "scissors") ||
    (input === "scissors" && randomizer === "rock")
  ) {
    console.log("You Lose! Try again...");
    continue;
  }

  // WIN
  // if (input === "rock" && randomizer === "scissors") {
  //   console.log("You Win!");
  //   break;
  // }
  // if (input === "paper" && randomizer === "rock") {
  //   console.log("You Win!");
  //   break;
  // }
  // if (input === "scissors" && randomizer === "paper") {
  //   console.log("You Win!");
  //   break;
  // }
  console.log("You Win!");
  break;
}

// So we want 3 symbols and we want it to run over each of them one at a time.
// Create a function that Use a randomizer
// Create a key or loop through the randomizer options to win or lose
// Check foundations capstone for while loop that continues until you hit cancel
// You'll have a starting balance and you can continue until they're out of money or they win

const prompt = require("prompt-sync")();

const combinations = ["$", "%", "#"];

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function playGame() {
  let balance = 10.0;

  while (balance >= 0.25) {
    console.log("\nYour current balance is: $" + balance.toFixed(2));
    console.log("Each pull of the lever will cost you $0.25");
    console.log("Pull the slot machine lever by pressing 'enter/return'...");

    let input = prompt(" ");

    if (input !== "") {
      console.log("Please press 'enter' or 'return' to play...");
      continue;
    }

    balance -= 0.25;

    let slot1 = combinations[Math.floor(Math.random() * combinations.length)];
    let slot2 = combinations[Math.floor(Math.random() * combinations.length)];
    let slot3 = combinations[Math.floor(Math.random() * combinations.length)];

    console.log("Spinning...");
    await wait(800);
    console.log(`First slot: ${slot1}`);
    await wait(800);
    console.log(`Second slot: ${slot2}`);
    await wait(800);
    console.log(`Third slot: ${slot3}`);
    console.log("-----------------------------");

    if (slot1 === slot2 && slot2 === slot3) {
      if (slot1 === "$") {
        console.log("JACKPOT! You won the grand prize!");
      } else {
        console.log("You won!");
      }
      break;
    } else {
      console.log("No match. Try again!\n");
    }
  }

  if (balance < 0.25) {
    console.log("\n You're out of money! Game Over.");
  }
}

playGame();

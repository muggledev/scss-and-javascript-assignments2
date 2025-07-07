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
  let winnings = 0.0;

  console.log("Welcome to the Slot Machine!");
  console.log("Each pull costs $0.25. Match 3 symbols to win!");
  console.log("Type 'e' and press enter at any time to exit.\n");

  while (balance >= 0.25) {
    console.log("Your balance: $" + balance.toFixed(2));
    console.log("Total winnings: $" + winnings.toFixed(2));

    let input = prompt("Press 'enter' to pull the lever or type 'e' to exit: ");
    if (input.toLowerCase() === "e") {
      console.log("You chose to exit the game.");
      break;
    }

    balance -= 0.25;

    let slot1 = combinations[Math.floor(Math.random() * combinations.length)];
    let slot2 = combinations[Math.floor(Math.random() * combinations.length)];
    let slot3 = combinations[Math.floor(Math.random() * combinations.length)];

    console.log("Spinning...");
    await wait(800);
    process.stdout.write(`[ ${slot1} `);
    await wait(800);
    process.stdout.write(` ${slot2} `);
    await wait(800);
    process.stdout.write(` ${slot3} ]\n`);
    await wait(800);
    console.log("-----------------------------");

    if (slot1 === slot2 && slot2 === slot3) {
      if (slot1 === "$") {
        console.log("JACKPOT! You won $5.00!");
        balance += 5.0;
        winnings += 5.0;
      } else {
        console.log("You matched three symbols and won $1.00!");
        balance += 1.0;
        winnings += 1.0;
      }
    } else {
      console.log("No match. Try again!\n");
    }
  }

  console.log("\nGame Over!");
  console.log("Total winnings: $" + winnings.toFixed(2));
  console.log("Final balance: $" + balance.toFixed(2));
}

playGame();

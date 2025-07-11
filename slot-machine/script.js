const prompt = require("prompt-sync")();

const combinations = ["$", "%", "#"];

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function playGame() {
  let balance = 100.0;
  let winnings = 0.0;

  console.log("Welcome to the Slot Machine!");
  console.log("Match 3 symbols to win! JACKPOT if you hit 3 '$'!");
  console.log("You start with $" + balance.toFixed(2));
  console.log("Type 'e' and press enter at any time to exit.\n");

  while (balance > 0) {
    console.log("Your current balance: $" + balance.toFixed(2));
    console.log("Total winnings: $" + winnings.toFixed(2));

    let input = prompt("Enter bet amount or type 'e' to exit: ");
    if (input.toLowerCase() === "e") {
      console.log("Thanks for playing! Exiting game...");
      break;
    }

    let bet = parseFloat(input);

    if (isNaN(bet) || bet <= 0) {
      console.log("Invalid bet. Please enter a positive number.");
      continue;
    }

    if (bet > balance) {
      console.log("You can't bet more than your current balance.");
      continue;
    }

    balance -= bet;

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
        let prize = bet * 3;
        console.log(`JACKPOT! You won $${prize.toFixed(2)}!`);
        balance += prize;
        winnings += prize;
      } else {
        let prize = bet * 2;
        console.log(`You matched three symbols and won $${prize.toFixed(2)}!`);
        balance += prize;
        winnings += prize;
      }
    } else {
      console.log("No match. Try again!\n");
    }

    if (balance <= 0) {
      console.log("\nYou're out of money!");
      break;
    }

    await wait(500);
  }

  console.log("\nGame Over!");
  console.log("Total winnings: $" + winnings.toFixed(2));
  console.log("Final balance: $" + balance.toFixed(2));
}

playGame();

// **********************ONE*************************

const prompt = require("prompt-sync")();

const chosenNum = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

while (true) {
  let guess = prompt("Guess a number between 1 and 100: ");
  guess = parseInt(guess);

  if (isNaN(guess)) {
    console.log("Please enter a valid number!");
    continue;
  }

  numberOfGuesses++;

  if (guess === chosenNum) {
    console.log("You got it! You guessed in " + numberOfGuesses + " tries.");
    break;
  } else if (guess < chosenNum) {
    console.log("Too low. Try again.");
  } else {
    console.log("Too high. Try again.");
  }
}

// **********************TWO*************************

function removeByIndex(array, indices) {
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    let index = indices[i];
    result.push(array[index]);
  }

  return result;
}

let letters = ["a", "b", "c", "d", "f", "f", "e", "f"];
let positions = [1, 5];

console.log(removeByIndex(letters, positions));

// **********************THREE***********************

function numToArray(num) {
  const result = [];
  while (num > 0) {
    result.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(numToArray(12345));

// **********************FOUR************************

function createMatrix(arrayOne, arrayTwo) {
  const result = [];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      result.push([arrayOne[i], arrayTwo[j]]);
      result.push([arrayTwo[j], arrayOne[i]]);
    }
  }

  return result;
}

const arrayOne = [1, 2, 3];
const arrayTwo = ["a", "b", "c", "d"];

const matrix = createMatrix(arrayOne, arrayTwo);
console.log(matrix);

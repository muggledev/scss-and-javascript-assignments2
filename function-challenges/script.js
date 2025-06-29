// **********************ONE**********************
const words = ["cakes", "brownies", "cookies"];
const longestWord = findLongestWord(words);

function findLongestWord(words) {
  return words.reduce(function (longest, current) {
    return current.length > longest.length ? current : longest;
  });
}

console.log("The longest word is:", longestWord);
// **********************TWO**********************

const name = "ryan";

function swapFirstAndLast(str) {
  return str[str.length - 1] + str.slice(1, -1) + str[0];
}

console.log(swapFirstAndLast("ryan"));

// **********************THREE**********************

const scores = [35, 56, 84];
let sum = 0;

scores.forEach(function (score) {
  sum += score;
});

console.log(sum);

// **********************FOUR**********************

function combine(arrayOne, arrayTwo) {
  const result = [];
  const length = Math.min(arrayOne.length, arrayTwo.length);

  for (let i = 0; i < length; i++) {
    result.push(arrayOne[i], arrayTwo[i]);
  }

  return result;
}

const combined = combine(
  ["Harry", "Ron", "Hermione"],
  ["Potter", "Weasley", "Granger"]
);

console.log(combined);

// **********************FIVE**********************

function capitalizeEachWord(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeEachWord("i am a sentence"));

// **********************SIX**********************

const sentence = "This string has several different values";
const words = sentence.split(" ");

const longestWord = findLongestWord(words);

function findLongestWord(words) {
  return words.reduce(function (longest, current) {
    return current.length > longest.length ? current : longest;
  });
}

console.log("The longest word is:", longestWord);

// **********************SEVEN**********************

function sortLetters(str) {
  return str.toLowerCase().split("").sort().join("");
}

const input = "Hello there beautiful";
const result = sortLetters(input);
console.log(result);

// **********************EIGHT**********************

function extractValues(array, indices) {
  return indices.map((index) => array[index]);
}

const originalArray = ["a", "b", "c", "d"];
const specifiedIndices = [1, 3];

const result = extractValues(originalArray, specifiedIndices);
console.log(result);

// **********************NINE**********************

const user = {
  userName: "Gabe",
  activeStatus: "away",
};

const login = (user) => {
  user.activeStatus = "active";
  return `${user.userName} is ${user.activeStatus}`;
};

console.log(login(user));

// **********************TEN**********************

function pow(base, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i++) {
    result *= base;
  }

  return result;
}

console.log(pow(4, 2));

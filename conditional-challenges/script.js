// ********************ONE**************************

const object1 = {
  name: "Harry Potter",
  occupation: "The Chosen One",
};
const object2 = {
  school: "Hogwarts",
  sport: "Quiditch",
};
const object3 = {};

for (let key in object1) {
  object3[key] = object1[key];
}

for (let key in object2) {
  object3[key] = object2[key];
}
console.log(object1);
console.log(object2);
console.log(object3);

// ********************TWO**************************
// without a ternary
function largestNum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(largestNum(9, 12));

function largestNum(a, b) {
  let result;

  if (a !== b) {
    result = a > b ? a : b;
  } else {
    result = a;
  }

  return result;
}

console.log(largestNum(9, 12));

// ********************THREE**************************

function titleCase(str) {
  let words = str.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let firstLetter = word[0].toUpperCase();

    let restOfWord = word.slice(1).toLowerCase();

    let newWord = firstLetter + restOfWord;

    newWords.push(newWord);
  }

  return newWords.join(" ");
}

console.log(
  titleCase("The only reason to eat cake is to get the frosting in your mouth.")
);

// ********************FOUR**************************

function sortLetters(str) {
  let lettersOnly = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== " ") {
      lettersOnly += char;
    }
  }
  lettersOnly = lettersOnly.toLowerCase();
  let lettersArray = lettersOnly.split("");
  lettersArray.sort();
  // let result = lettersArray.join("");
  let result = lettersArray.join("").toUpperCase();
  return result;
}

console.log(sortLetters("This is just like magic"));

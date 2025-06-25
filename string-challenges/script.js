// NUMBER ONE

const input1 = "abc";
const input2 = 190;

const isStr1 = typeof input1 === "string";
const isStr2 = typeof input2 === "string";

console.log(isStr1);
console.log(isStr2);

// *********OR********************

function isString(input) {
  return typeof input === "string";
}

console.log(isString("abc"));
console.log(isString(190));

// NUMBER TWO

const blank1 = "";
const blank2 = " ";
const blank3 = "fjfjf";

const check1 = blank1.trim() === "";
const check2 = blank2.trim() === "";
const check3 = blank3.trim() === "";

console.log(check1);
console.log(check2);
console.log(check3);

// *********OR********************

function isBlankString(input) {
  if (input.trim() === "") {
    return true;
  } else {
    return false;
  }
}

console.log(isBlankString(""));
console.log(isBlankString(" "));
console.log(isBlankString("fjfjf"));

// NUMBER THREE

const str1 = "abcdef";
const str2 = "cupcakes with sprinkles are happiness.";

const cap1 = str1[0].toUpperCase() + str1.slice(1);
const cap2 = str2[0].toUpperCase() + str2.slice(1);

console.log(cap1);
console.log(cap2);

// *********OR********************

function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizeFirst("abcdef"));
console.log(capitalizeFirst("cupcakes with sprinkles are happiness."));

// NUMBER FOUR

const name = "Ryan Curtis";
const abbr =
  name.slice(0, name.indexOf(" ")) +
  " " +
  name[name.indexOf(" ") + 1].toUpperCase() +
  ".";

console.log(abbr);

// *********OR********************

function abbr(str) {
  return (
    str.slice(0, str.indexOf(" ")) +
    " " +
    str[str.indexOf(" ") + 1].toUpperCase() +
    "."
  );
}

console.log(abbr("Ryan Curtis"));

// NUMBER FIVE

const sentence = "I am a long sentence";
const max = 6;

const truncated =
  sentence.length <= max ? sentence : sentence.slice(0, max).trim() + "...";

console.log(truncated);

// *********OR********************

function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength).trim() + "...";
  }
}

console.log(truncate("I am a long sentence", 6));

// NUMBER SIX

const longStr = "The practitioners grappled on the road side!";
const fromG = longStr.slice(longStr.indexOf("g"));

console.log(fromG);

// *********OR********************

const str = "The practitioners grappled on the road side!";
const result = str.slice(str.indexOf("g"));

console.log(result);

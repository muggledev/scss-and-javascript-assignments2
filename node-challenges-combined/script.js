// 1st CHALLENGE
function createHeading(size, text) {
  if (size < 1 || size > 6) {
    console.error("Heading size must be bewtween 1 and 6.");
    return null;
  }

  const heading = document.createElement(`h${size}`);
  heading.innerText = text;

  return heading;
}

function render(element, targetSelector = "body") {
  const target = document.querySelector(targetSelector);
  if (target && element) {
    target.appendChild(element);
  }
}

const heading = createHeading(3, "This is a dynamic H3 heading!");
render(heading, "#container");

// 2nd CHALLENGE
const allElements = document.querySelectorAll("*");

allElements.forEach((el) => {
  console.log(el.tagName);
});

const allDivs = document.querySelectorAll("div");
allDivs.forEach((div) => {
  console.log(div);
  console.log(div.tagName);
});

const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
  console.log(link);
  console.log(link.href);
});

// 3rd CHALLENGE

const col1 = document.querySelector(".col1");
const col2 = document.querySelector(".col2");
const col3 = document.querySelector(".col3");

function getHexBackgroundColor(element) {
  const rgb = window.getComputedStyle(element).backgroundColor;

  const rgbValues = rgb.match(/\d+/g).map(Number);
  const hex = rgbValues
    .map((val) => val.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

  return `#${hex}`;
}

col1.textContent = getHexBackgroundColor(col1);
col2.textContent = getHexBackgroundColor(col2);
col3.textContent = getHexBackgroundColor(col3);

// CHALLENGE 1

const users = [
  {
    id: 1,
    name: "Jack Sparrow",
    email: "jack.sparrow@theblackpearl.com",
    password: "password1",
  },
  {
    id: 2,
    name: "Elizabeth Swan",
    email: "elizabeth.swan@thegovernersdaughter.com",
    password: "password2",
  },
  {
    id: 3,
    name: "Will Turner",
    email: "will.turner@pirate.com",
    password: "password3",
  },
];

users.forEach((user) => {
  console.log(`Hello, ${user.name}, your email is ${user.email}`);
});

// CHALLENGE 2
const characterId = prompt("Enter a Star Wars character ID (1-83):");

function getCharacter(id) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = `https://swapi.tech/api/people/${id}`;

    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        } catch (error) {
          reject("Error parsing JSON");
        }
      } else {
        reject(`Request failed with status ${xhr.status}`);
      }
    };

    xhr.onerror = () => reject("Network error");
    xhr.send();
  });
}

const myPromise = getCharacter(characterId);

myPromise
  .then((data) => {
    console.log("Full character data:", data);
    const name = data.result.properties.name;
    console.log("Character name:", name);
    alert(`Character Name: ${name}`);
  })
  .catch((error) => {
    console.error("This is in the catch:", error);
    alert("An error occurred: " + error);
  })
  .finally(() => {
    console.log("This is the finally.");
    alert("Request complete.");
  });

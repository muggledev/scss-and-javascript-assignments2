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

const fetchCharacter = getCharacter(characterId);

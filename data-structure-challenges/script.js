// ******************CHALLENGE ONE**************

const student = {
  id: 7,
  name: "Hermione",
  age: 14,
  dob: "Sep. 19, 1979",
  grades: [97, 98, 99],
  contact: {
    email: "hermione@hogwarts.edu",
    address: {
      street: "4 Privet Drive",
      city: "Little Whinging",
    },
  },
  "delete me": "oops",
};

console.log("Before deleting:");
console.log(student);

delete student["delete me"];

console.log("After deleting:");
console.log(student);

// ******************CHALLENGE TWO**************

const user = {
  firstName: "Rachelle",
  lastName: "Hooley",
  city: "Fairview",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user.semesters.semesterOne = "complete";
delete user.semesters.semesterFour;

user.favoriteLanguage = "Python";

console.log(user);

// ******************CHALLENGE THREE**************
function newObject(array) {
  let toggle = true;

  return {
    method: function () {
      if (array.length === 0) return undefined;

      if (toggle) {
        toggle = !toggle;
        return array.shift();
      } else {
        toggle = !toggle;
        return array.pop();
      }
    },
  };
}

const instance = newObject([1, 2, 3, 4, 5]);

console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());
console.log(instance.method());

console.clear();
console.log("\n");

// POJO -> Plain Old JavaScript Object
let ali = {
  name: "Ali",
  age: 21,
  drinkCoffee: function () {
    console.log("Drinking coffee");
  },
  addYear: function () {
    this.age++;
  },
};

let celeste = {
  name: "Celeste",
  age: 25,
  addYear: function () {
    this.age++;
  },
  drinkCoffee: function () {
    console.log("Drinking coffee");
  },
};

let jorge = {
  name: "Jorge",
  age: 34,
  addYear: function () {
    this.age++;
  },
  drinkCoffee: function () {
    console.log("Drinking coffee");
  },
};

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    addYear: function () {
      this.age++;
    },
    drinkCoffee: function () {
      console.log("Drinking coffee");
    },
  };
}

let ali2 = createPerson("Ali", 21);
ali2.drinkCoffee = function () {
  console.log("Ali drinking coffee");
};
let celeste2 = createPerson("Celeste", 25);
let jorge2 = createPerson("Jorge", 34);

// ali2.drinkCoffee();
// celeste2.drinkCoffee();
// jorge2.drinkCoffee();

function createPersonProperly(name, age) {
  const newPerson = Object.create(drinkCoffeeObj);
  newPerson.name = name;
  newPerson.age = age;

  return newPerson;
}

const drinkCoffeeObj = {
  drinkCoffee: function () {
    console.log(`${this.name} is drinking coffee`);
  },
};

let ali3 = createPersonProperly("Ali", 21);

ali3.drinkCoffee();

let celeste3 = createPersonProperly("Celeste", 24);

celeste3.drinkCoffee();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   drinkCoffee = function () {
//     console.log(`${this.name} is drinking Coffee`);
//   };
// }

// let userAPIResponse = {
//   username: "Ali",
//   email: "ali@gmail.com",
//   age: 24,
// };

// for (let key in userAPIResponse) {
//   console.log(key);
// }
//                 ["username","email","age"]
// for (let key of Object.keys(userAPIResponse)) {
//   console.log(key);
// }

// ALI's Wild Adventure into DSA

// let str = "Alicia";

// let charMap = {};

// for (let i = 0; i < str.length; i++) {
//   let char = str[i].toLowerCase();
//   // this means that the character we're looking at is in the map
//   if (charMap[char]) {
//     charMap[char]++;
//   } else {
//     charMap[char] = 1;
//   }
// }

// console.log(charMap);

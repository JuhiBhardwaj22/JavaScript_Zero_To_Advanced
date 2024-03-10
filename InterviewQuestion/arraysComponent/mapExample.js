//map will return value into new array
const arr = [1, 4, 9, 16];
const newArr = arr.map((items) => {
  return items * 2;
});

console.log("newArr", newArr);

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];

const newUserList = users.map((items) => {
  return `${items.first_name} ${items.last_name}`;
});

console.log("newUserList ->", newUserList);

// Using map with thisArg
const person = {
  name: "Juhi",
  age: 30,
  sayHello: function () {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  },
};

const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(function (value) {
  return value * this.age; // 'this' refers to the 'person' object
}, person);

console.log(squaredNumbers);

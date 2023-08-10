//Method context
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};

person.greet(); // Output: Hello, John!

//Constructor functions:
function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Output: John

//Explicit binding: The value of this can be explicitly set using methods like call(), apply(), or bind().
// These methods allow you to control the context in which a function is executed. For example:

function greet() {
  console.log("Hello, " + this.name + "!");
}

const personCall = { name: "John" };
greet.call(personCall); // Output: Hello, John!

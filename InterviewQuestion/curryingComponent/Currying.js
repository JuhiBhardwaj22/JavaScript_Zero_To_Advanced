//Noncurried version//
const addValue = (a, b, c) => {
  return a + b + c;
};
console.log(addValue(2, 3, 5)); // 10

//Curried version
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      return function sum4(d) {
        return function sum5(e) {
          return a + b + c + d + e;
        };
      };
    };
  };
}

//
const result2 = sum(20)(20)(20)(20)(20); //currying in javascript, this will excute when all the value get
console.log("Result ->", result2);

const add = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

console.log("Add-using arrow function", add(20)(20)(20)(20)(20));

// Example 3: Creating a friend request curry function
// In this example, we are going to create a simple curry function where a user sends a friend request to his friend John:

function sendRequest(greet) {
  return function (name) {
    return function (message) {
      return `${greet} ${name}, ${message}`;
    };
  };
}
sendRequest("Hello")("John")("Please can you add me to your Linkedin network?");

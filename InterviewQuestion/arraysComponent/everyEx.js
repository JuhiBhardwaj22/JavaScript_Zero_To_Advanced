const arr = [1, 30, 39, 29, 10, 13];

const newArr = arr.every(function (elm) {
  return elm < 40;
});

console.log("newArr ->", newArr); // true

//False condition
const newArr1 = arr.every(function (elm) {
  return elm < 30;
});

console.log("newArr1 ->", newArr1); // false

// Check positive number

let numbers = [10, -30, 20, 50];

const numsArr = numbers.every(function (elm) {
  return elm > 0;
});

console.log("numsArr ->", numsArr); //false

//Some example
let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log("containsPositive", containsPositive); //true

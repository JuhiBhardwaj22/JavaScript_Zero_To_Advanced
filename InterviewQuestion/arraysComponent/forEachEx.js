//It will execute for each element of array

const arr = ["a", "b", "c"];
arr.forEach((items) => {
  console.log("items", items);
});

const months = ["January", "February", "March", "April"];
months.forEach(function (elm) {
  console.log("elm ->", elm);
});

//forEach method does not return any value.
const returnedValue = months.forEach(function (month) {
  return month;
});

console.log("returnedValue: ", returnedValue); // undefined

const num = [1, 2, 3];
var newArr = [];
num.forEach((elm) => {
  newArr.push(elm * 2);
});
console.log("newarray ->", newArr);
console.log("num ->", num);

//foreach 2nd argument which is thisArg it will work only case of normal function
//in case of arrow function it will not work
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

numbers.forEach(function (value) {
  console.log(value * this.age);
}, person);

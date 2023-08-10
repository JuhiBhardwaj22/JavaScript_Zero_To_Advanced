// getName(); //Hello Hoisting
// console.log("x ->", x); // undefined

// var x = 7;

// function getName() {
//   console.log("Hello Hoisting");
// }

//suppose we will remove x =7 than see what will happen

// getName(); //Hello Hoisting
// console.log("x ->", x); // Error ReferenceError: x is not defined

// function getName() {
//   console.log("Hello Hoisting");
// }

//This ia what hoisting is

//Another example

// getName1(); //Invoking the function
// console.log("y ->", y); // here we will get undefined

// console.log("getName1 ->", getName1); // but here we will get whole function

// function getName1() {
//   console.log("Hello Hoisting");
// }
// var y = 10;

//Example 2

// getName2();
// getName3();
// console.log("x ->", x);

// console.log("getName ->", getName);

// function getName() {
//   console.log("Hello Hoisting");
// }

// var x = 2;

// var getName2 = () => {
//   console.log("arrow function"); // store undefined
// };

// var getName3 = function () {
//   console.log("it will behave like variable"); // store undefined
// };

console.log("y ->", y);
console.log("x->", x);

console.log("z->", z);

let x = 10;

var y = 20;

const z = 30;



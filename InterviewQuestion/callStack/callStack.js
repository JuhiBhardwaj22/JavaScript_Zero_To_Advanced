function greeting() {
  // [1] Some code here
  sayHi();
  // [2] Some code here
}
async function sayHi() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const list = await data.json();
  //console.log("list", list);
  sayHello();
  console.log("sayHi ");
}

function sayHello() {
  console.log("Hello ");
}
// Invoke the `greeting` function
greeting();

const obj = {
  name: "Juhi",
  lastName: "Bhardwaj",
  age: 24,
};
const value = Object.values(obj);
console.log("value", Object.entries(obj));

for (let list of Object.values(obj)) {
  console.log("obj", list);
}

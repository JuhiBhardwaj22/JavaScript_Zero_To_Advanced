function main() {
  const name = "Hello Juhi by Closure";

  function inner() {
    console.log("name", name);
  }
  inner();
}
main();

var count = 0;
function main(x) {
  count = count + x;
  function inner() {
    console.log("count - >", count);
  }
  inner();
}

main(1);
main(1);
main(1);

function adder(num) {
  function add(num2) {
    console.log(num + num2);
  }
  return add;
}
let addOne = adder(10);
addOne(5);
addOne(10);

//Practical uses of Closures
const myName = document.getElementById("my-name");
const btn = document.getElementById("my-btn");

function getTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize;
}

const size10 = getTextSizer(10);
const size20 = getTextSizer(20);
const size30 = getTextSizer(30);
const size50 = getTextSizer(50);
const size70 = getTextSizer(70);

btn.addEventListener("click", size70);

//Closure scope chain

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

const sum2 = sum(10);
const sum3 = sum2(20);
const sum4 = sum3(30);
const sum5 = sum4(40);
const result = sum5(100);
console.log("Result ->", result);
//or we can also do this like
const result2 = sum(20)(20)(20)(20)(20); //currying in javascript

console.log("Result ->", result2);

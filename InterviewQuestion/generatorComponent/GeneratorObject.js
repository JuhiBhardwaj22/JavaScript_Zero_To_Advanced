// Generate Function generates three
// different numbers in three calls
function* getNums() {
  yield 10;
  yield 20;
  yield 30;
}

let genObj = getNums();
console.log("genObj->", genObj.next());
console.log("genObj->", genObj.next());
console.log("genObj->", genObj.next());
console.log("genObj->", genObj.next());

//Example 2: This example code to print infinite series of natural numbers using a simple generato

function* getNaturalNums() {
  let naturanNum = 1;
  while (true) {
    yield naturanNum++;
  }
}

let numsObj = getNaturalNums();
// Loop to print the first
// 10 Generated number
console.log("nums", numsObj);
for (let i = 0; i < 10; i++) {
  console.log("nums", numsObj.next().value);
}

//Another example
const arr = ["a", "b", "c"];

function* generator() {
  yield 1;
  yield* arr;
  yield 2;
}

for (let value of generator()) {
  console.log(value);
}

const arr = [5, 2, 1, 4, 6, 0, 7, 8, 3];
const strArr = ["v", "h", "a", "e", "o", "p"];

//Simple sort function

console.log("default oder Ascending Sort ->", arr.sort());
console.log("arr original ->", arr);
console.log("default oder Ascending Sort String ->", strArr.sort());

const arr1 = [5, 2, 1, 4, 6, 0, 7, 8, 3];
//Descending
const newSortedArr = arr1.sort((a, b) => (a > b ? -1 : 1)); //[]
console.log("newSortedArr", newSortedArr);

//Ascending
const newSortedArr1 = arr1.sort((a, b) => (a > b ? 1 : -1));
console.log("newSortedArr ->", newSortedArr1);

//Example
const numberArray = [40, 1, 5, 200];

//Assending order
const newarr1 = numberArray.sort((a, b) => a - b);

console.log("newarr1", newarr1);

//Descending order
const newarr2 = numberArray.sort((a, b) => b - a);
console.log("newarr2", newarr2);

//Example
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

items.sort((a, b) => console.log("Itmes ->", a, b));
const newV = items.sort((a, b) => a.value - b.value);

console.log(newV);
const newV1 = items.sort((a, b) => (a.value > b.value ? -1 : 1));

console.log(newV1);

const singleArr = [1, 4, 2, 5, 8];
const points = [40, 100, 1, 5, 25, 10];

console.log("sorts", points.sort());
console.log("singleArr", singleArr.sort());
//using compare function
console.log(
  "using compare function sorts",
  points.sort((a, b) => a - b)
);

let num = [2, 1, 6, 4, 3, 0, 8, 500, 9];

num.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
});

console.log("compare function assending->", num); // it will sort as assending order

let num1 = [2, 1, 6, 4, 300, 1000, 8, 500, 9];
num1.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

console.log("compare function decending ->", num1); // decending order

//

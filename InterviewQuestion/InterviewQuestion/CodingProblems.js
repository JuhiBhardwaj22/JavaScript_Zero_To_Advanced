//https://blog.bitsrc.io/most-important-javascript-coding-challenge-aa14c956d2df

//1.Remove duplicates from an array and return unique values in O(n) complexity.

//Index of always take a first index
const arr = [1, 2, 3, 4, 5, 5, 2, 3, 6, 2];
const unique = arr.filter((items, index, arr) => {
  return arr.indexOf(items) === index;
});
console.log(unique);
console.log("Original -arr", arr);

//By using forEach loop

let objArr = [];
const unique1 = arr.forEach((items, index) => {
  if (!objArr.includes(items)) return objArr.push(items);
});
console.log(objArr);

//2. Find the frequency of element in array
const arrList = [1, 2, 3, 4, 5, 5, 2, 3, 6, 2];
let freList = {};
arrList.forEach((elm) => {
  if (freList[elm]) {
    freList[elm]++;
  } else {
    freList[elm] = 1;
  }
  return freList;
});
console.log("lisy ->", freList);

//Another approch by using for of loop

const list = {};

for (let elm of arrList) {
  list[elm] ? list[elm]++ : (list[elm] = 1);
}

console.log("List for of loop", list);

// brute force approch

function countOccurence(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    obj[elm] ? obj[elm]++ : (obj[elm] = 1);
  }
  return obj;
}

let countList = countOccurence(arrList);
console.log("countList", countList);

//Q. Group items on the basis of age of given array of object
const people = [
  { name: "Juhi", age: 27 },
  { name: "Mahi", age: 23 },
  { name: "Test", age: 27 },
  { name: "Mark", age: 23 },
];

//Output Should be
// {
//   '23' : [{ name: "Mahi", age: 23 },{ name: "Mark", age: 23 }],
//   '27' : [ { name: "Juhi", age: 27 }, { name: "Test", age: 27 }],
// }

function getByAge(arr) {
  let result = {};
  arr.forEach((elm, index, arr) => {
    if (!result[elm.age]) {
      // first time all value will be saved here
      result[elm.age] = [elm];
      //[elm] by this way we will create array and saved the object into array format
      console.log("!result[elm.age] ->  ", result[elm.age]);
    } else {
      result[elm.age].push(elm);
    }
  });
  return result;
}

console.log("getByAge:-", getByAge(people));

//Question

let bookList = [
  { name: "Juhi", books: ["Bible", "HarryPorter"] },
  { name: "Mahi", books: ["Hindi", "Geeta"] },
  { name: "Juhi", books: ["Ramayan", "Lord"] },
  { name: "Juhi", books: ["TestCopy", "English"] },
];

const getBookList = bookList.reduce((acc, curr) => {
  return [...acc, ...curr.books];
}, []);

console.log("getBookList", getBookList);

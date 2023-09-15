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
const arrList = [1, 2, 3, 4, 5, 5, 2, 3, 6, 2, 100];
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

//Sort
// /Certainly! This question is asking you to create a function that takes an array arr
//and a sorting function fn as inputs.
//The goal is to return a new array sortedArr that contains the elements of the original array arr,
// sorted in ascending order based on the output of the function fn.
function sortByFunction(arr, fn) {
  const sortedArr = [...arr]; // Create a copy of the original array

  sortedArr.sort((a, b) => {
    const resultA = fn(a);
    const resultB = fn(b);
    return resultA - resultB; // Sort in ascending order based on fn output
  });

  return sortedArr;
}

// Example usage:
const inputArray = [4, 2, 7, 1, 5];
const sortingFunction = (num) => num * 2;

const sortedArray = sortByFunction(inputArray, sortingFunction);
console.log(sortedArray); // Output: [1, 2, 4, 5, 7]

//1  -> Function to find the missing number in an unsorted array
function findMissingNumber(arr, n) {
  // Calculate the sum of numbers from 1 to n (inclusive)
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of the elements in the array
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  // Find the missing number by subtracting the actual sum from the expected sum
  const missingNumber = expectedSum - actualSum;

  return missingNumber;
}

// Example array with one missing number
const unsortedArray = [3, 7, 1, 2, 8, 4, 5, 6, 10, 9]; // Numbers from 1 to 10 with 1 missing

// Calculate the missing number
const missingNumber = findMissingNumber(unsortedArray, 10); // 10 is the expected total count

console.log(`The missing number is: ${missingNumber}`);

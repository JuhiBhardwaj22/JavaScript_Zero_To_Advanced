//Reverse Aray
const arr = [1, 2, 3, 4, 5, 6];

const newRevArray = arr.map((_, index, arr) => {
  return arr[arr.length - 1 - index];
});

console.log("newRevArray", newRevArray);

const newArrayList = [];
const newRevArray1 = arr.map((item, index, arr) => {
  return newArrayList.unshift(item);
});

console.log("newRevArray1", newArrayList);

//Maximum element

const nums = [23, 1, 12, 10, 330, 45];
let maxItem = nums[0];

nums.forEach((item, i, nums) => {
  if (maxItem < item) {
    maxItem = item;
  }
});

console.log("maxItem", maxItem);

//Remove deplicate from array

const dupArray = [2, 3, 2, 3, 4, 5, 1, 3];

const newUniqueArray = dupArray.filter((item, index) => {
  return dupArray.indexOf(item) === index;
});

console.log("Original Array", dupArray);
console.log("newUniqueArray", newUniqueArray);

//another approch
const newUniqueForEach = [];
dupArray.forEach((item, index) => {
  if (!newUniqueForEach.includes(item)) {
    newUniqueForEach.push(item);
  }
});

console.log("newUniqueForEach", newUniqueForEach);

//Find the intersection of two arrays.

const array1 = [1, 2, 3, 4, 5, 9, 9, 9];
const array2 = [3, 4, 5, 6, 7, 9];

const interArray = array1.filter((item, index) => array2.includes(item));

console.log("interArray", interArray);

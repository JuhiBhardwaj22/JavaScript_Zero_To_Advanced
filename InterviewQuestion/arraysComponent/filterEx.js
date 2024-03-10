//How to get all unique values

const arr = [1, 2, 3, 4, 4, 5, 3, 2, 7, 8];

//By using Set
const newFilterArr = arr.filter((elm, index, arr) => {
  return elm === 2 || elm === 4;
});
console.log("newFilterArr", newFilterArr);

let unique = [...new Set(newFilterArr)]; // get unique value [2, 4]
console.log("unique", unique);
//[2, 4, 4, 2]

//By using indexOf
const newFilArr = arr.filter((elm, index, arr) => {
  // It returns the index of the first
  // instance of each value
  if (elm === 2 || elm === 4) {
    return arr.indexOf(elm) === index;
  }
});

console.log("newFilArr", newFilArr);

const value = arr.filter((elm, index, arr) => {
  return arr.indexOf(elm) === index;
});
console.log("value", value);

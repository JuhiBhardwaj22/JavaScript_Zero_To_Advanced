//.map() is very much similar to .forEach() method, except,
//instead of returning items out of the array, it return the array itself

let arr = [1, 2, 3, 4, 5];

function getMultiple(elm) {
  return elm * elm;
}

//with map
let getVal = arr.map(getMultiple);
console.log("getVal", getVal);

//polyfills for map method
//map always return value in new array

Array.prototype.myMap = function (callBackFunction) {
  let newArray = [];
  console.log("this", this); // this will work as global object here
  for (let i = 0; i < this.length; i++) {
    console.log("this[i]", this[i]);
    newArray.push(callBackFunction(this[i]));
  }

  return newArray;
};

let getMyMapvalue = arr.myMap(getMultiple);

console.log("getMyMapvalue", getMyMapvalue);

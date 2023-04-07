const numbers = [1, 2, 3, 4, 5, 6];
function callBack(acc, cur) {
  return acc + cur;
}

let getVal = numbers.reduce(callBack);
//console.log("getVal", getVal);

Array.prototype.myReduce = function (callBackFunction, initial) {
  //initial sum should be 0 thats why below logic written
  let acc = initial !== "undefined " ? initial : this[0];
  for (let i = 0; i < this.length; i++) {
    acc = callBackFunction(acc, this[i]);
  }
  return acc;
};

let getReduceVal = numbers.myReduce(callBack, 0);
console.log("getReduceVal", getReduceVal);

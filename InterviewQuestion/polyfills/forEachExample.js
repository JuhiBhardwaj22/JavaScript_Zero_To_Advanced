//forEach
let arr = [1, 2, 3, 4];

function getMulValue(x) {
  console.log("mul:", x * x);
}

arr.forEach(getMulValue);

//Polyfill for forEach

Array.prototype.ourForEach = function (callBackFunction) {
  for (let i = 0; i < this.length; i++) {
    callBackFunction(this[i]);
  }
};

arr.ourForEach(getMulValue);

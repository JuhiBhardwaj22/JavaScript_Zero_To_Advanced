// Promise can be in three states
// 1 fulfilled
// 2 pending
// 3 rejected

//Promise.all :- takes an iterable of promises as input and returns a single Promise .
// This returned promise fulfills when all of the input's promises fulfill

const promise1 = Promise.resolve("Hello promise1");
const promise2 = Promise.resolve("Hello promise2");

const promise3 = new Promise((resolve, reject) => {
  resolve("Hello Promise3");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello promise4");
  }, 100);
});

const rejectPromise = Promise.reject("Rejected Promises");

// Return array of results of input promises
// Wait for all promises to be resolved or any to be rejected
// You will not get result if any of promise is rejected.
var test = Promise.all([promise1, promise2, promise3]);
console.log("test ->>>>>>>>>>>>", test);
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log("wow  sucesss!!", result))
  .catch((error) => console.log(error));

//IF any of the promise will reject then we will get rejected error whatever we want to show
Promise.all([promise1, promise2, promise3, rejectPromise])
  .then((result) => console.log(result))
  .catch((error) => console.log("Error ->", error));

console.log("-----Polyfill of Promise.all-------------");

//Polyfill for Promise.all
Promise.myAll = function (arrOfPromise) {
  return new Promise((resolve, reject) => {
    let counter = 0;
    let newArray = [];
    for (let i = 0; i < arrOfPromise.length; i++) {
      Promise.resolve(arrOfPromise[i])
        .then((val) => {
          counter++;
          newArray[i] = val;
          if (counter == arrOfPromise.length) {
            resolve(newArray);
          }
        })
        .catch((error) => reject(error));
    }
  });
};
Promise.myAll([promise1, promise2, promise3])
  .then((result) => console.log("Polyfill  ", result))
  .catch((error) => console.log("Polyfill -Reject", error));

//Polyfill  Promise.any
function myAny(arrOfPromise) {
  return new Promise((resolve, reject) => {
    let count = 0;
    let resolveVal = false;
    for (let i = 0; i < arrOfPromise.length; i++) {
      Promise.resolve(arrOfPromise[i])
        .then((res) => {
          if (!resolveVal) {
            resolveVal = true;
            resolve(res);
          }
        })
        .catch((err) => {
          count++;
          if (count === arrOfPromise.length) {
            reject(new AggregateError("All promises were rejected", err));
          }
        });
    }
  });
}
Promise.myAny = myAny;
Promise.myAny([promise1, promise2, rejectPromise])
  .then((val) => console.log("Polyyfils for anly function  --->", val))
  .catch((err) => {
    throw err;
  });

//Polyfill for promise.allsettled

Promise.myAllSettled = function (arrOfPromise) {
  return new Promise((resolve, reject) => {
    let newArray = [];
    let count = 0;
    for (let i = 0; i < arrOfPromise.length; i++) {
      Promise.resolve(arrOfPromise[i])
        .then((res) => {
          count++;
          newArray[i] = res;
          if (count === arrOfPromise.length) {
            resolve(newArray);
          }
        })
        .catch((err) => {
          count++;
          newArray[i] = err;
          if (count === arrOfPromise.length) {
            resolve(newArray);
          }
        });
    }
  });
};

Promise.myAllSettled([promise4, promise1, rejectPromise])
  .then((val) => console.log("Polyyfils for myAllSettled function  --->", val))
  .catch((err) => {
    throw err;
  });

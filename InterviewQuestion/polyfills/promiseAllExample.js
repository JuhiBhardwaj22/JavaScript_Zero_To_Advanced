// Promise can be in three states
// 1 fulfilled
// 2 pending
// 3 rejected

//Promise.all :- takes an iterable of promises as input and returns a single Promise . This returned promise fulfills when all of the input's promises fulfill

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello promise1");
  }, 100);
});

const promise2 = Promise.resolve("Hello promise2");

const promise3 = new Promise((resolve, reject) => {
  resolve("Hello Promise3");
});

const rejectPromise = Promise.reject("Rejected Promises");

// Return array of results of input promises
// Wait for all promises to be resolved or any to be rejected
// You will not get result if any of promise is rejected.

Promise.all([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//IF any of the promise will reject then we will get rejected error whatever we want to show
Promise.all([promise1, promise2, promise3, rejectPromise])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

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

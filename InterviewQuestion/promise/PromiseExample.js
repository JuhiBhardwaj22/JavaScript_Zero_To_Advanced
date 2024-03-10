//you're creating a new promise using the Promise constructor.
//The promise has a function with resolve and reject parameters.
let promiseResolve = new Promise((resolve, reject) => {
  resolve("I am done ");
});
let promiseReject = new Promise((resolve, reject) => {
  //reject(new Error("Something is not right!"));
});

console.log("Resolve->", promiseResolve);
console.log("Reject ->", promiseReject);

let promise1 = new Promise((resolve, reject) => {
  resolve("IGNORED!!");
  reject(new Error("Not found"));
  resolve("Resolved hahahha!!");
});

console.log("promise1", promise1);

//Promise.all()
//Promise.resolve is a shorthand method for creating a resolved promise.
// It returns a new promise that is already resolved with the provided value
const promis1 = Promise.resolve("First Promise");
const promis2 = new Promise((resolve, reject) => {
  resolve("Second Promise");
});
const promis3 = new Promise((resolve, reject) => {
  resolve("Third Promise");
});

var pro = Promise.all([promis1, promis2, promis3]);
console.log("single ------------------------", pro);

//If you want to see the resolved values, you should use .then() to wait for the promises to be resolved.
Promise.all([promis1, promis2, promis3]).then((val) => {
  console.log("Promise.all", val);
});

//Let me reject any promise
const promis12 = Promise.resolve("First Promise");
const promis13 = new Promise((resolve, reject) => {
  reject("Second Promise");
});
const promis14 = new Promise((resolve, reject) => {
  resolve("Third Promise");
});

var pro2 = Promise.all([promis12, promis13, promis14]);
console.log("single ------------------------", pro2);
Promise.all([promis12, promis13, promis14]).then((val) => {
  console.log("Promise.all", val);
});

//Promise.any
const promis21 = Promise.resolve("First Promise");
const promis22 = new Promise((resolve, reject) => {
  resolve("Second Promise");
});
const promis23 = new Promise((resolve, reject) => {
  reject("Third Promise");
});
var p = Promise.any([promis21, promis22, promis23]);
console.log("p-----------------------------", p);
Promise.any([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.any", val);
});

//Promise.allsettled
Promise.allSettled([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.allSettled", val);
});

var p1 = Promise.allSettled([promis21, promis22, promis23]);
console.log("p-----------------------------", p1);

//Promise.race
Promise.race([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.race", val);
});
const fetchData = () =>
  new Promise((resolve) => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log("info------------------------------------------> ", res);
        if (res.ok) {
          return res.json();
        } else {
          reject(reject(new Error("Failed to fetch data")));
        }
      })
      .then((data) => {
        console.log("Data-------------------------------------------->", data);
        resolve(data);
      })
      .catch((error) => reject(error));
  });

fetchData().then((data) => console.log("MAHI->", data));

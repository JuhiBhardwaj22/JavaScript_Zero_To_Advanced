let promiseResolve = new Promise((resolve, reject) => {
  resolve("I am done ");
});
let promiseReject = new Promise((resolve, reject) => {
  //reject(new Error("Something is not right!"));
});

console.log("Resolve->", promiseResolve);
console.log("Reject ->", promiseReject);

let promise1 = new Promise((resolve, reject) => {
  resolve("Resolved hahahha!!");
  resolve("IGNORED!!");
  reject(new Error("Not found"));
});

console.log("promise1", promise1);

//Promise.all()
const promis1 = Promise.resolve("First Promise");
const promis2 = new Promise((resolve, reject) => {
  resolve("Second Promise");
});
const promis3 = new Promise((resolve, reject) => {
  resolve("Third Promise");
});

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

Promise.any([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.any", val);
});

//Promise.allsettled
Promise.allSettled([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.allSettled", val);
});

//Promise.race
Promise.race([promis21, promis22, promis23]).then((val) => {
  console.log("Promise.race", val);
});

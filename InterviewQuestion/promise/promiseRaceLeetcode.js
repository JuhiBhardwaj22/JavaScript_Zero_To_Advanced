// Given an asyncronous function fn and a time t in milliseconds, return a new time
// limited version of the input function. A time limited function is a function that is
// identical to the original unless it takes longer than t milliseconds to fullfill. In that case,
// it will reject with "Time Limit Exceeded". Note that it should reject with a string, not an Error."

//ANS:--

// An asynchronous function is a function that can run in parallel with other functions without blocking
//the execution of the rest of the code1. It usually returns a promise, which is an object that represents
// a future value or outcome1. A promise can be either fulfilled (resolved with a value) or
// rejected (rejected with a reason).

// A time limited function is a function that has a maximum time limit to execute.
//If the function takes longer than the time limit, it will reject the promise with a reason of
//“Time Limit Exceeded”. Otherwise, it will fulfill the promise with the same value as the original function.

// To create a time limited version of an asynchronous function, you need to use the Promise.race()
// method, which takes an array of promises and returns a new promise that resolves or rejects as soon
//as one of the promises in the array does so1. You can use this method to race between the original function and a timeout function that rejects after a certain time.

// Here is an example of how to implement a time limited function in JavaScript:
// Given an asyncronous function fn and a time t in milliseconds
function timeLimit(fn, t) {
  // Return a new time limited version of the input function
  return async function (...args) {
    // Create a timeout function that rejects after t milliseconds
    let timeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });
    // Race between the original function and the timeout function
    return Promise.race([fn(...args), timeout]);
  };
}

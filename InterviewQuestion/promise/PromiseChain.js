//By adding throw err; in the catch blocks, you re-throw the error to prevent the
//subsequent then from executing if an error occurs. This ensures that each catch block
//only handles errors from the preceding then block as expected.
function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise resolved");
    }, 2000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Second promise reject");
    }, 2000);
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tird promise resolved");
    }, 2000);
  });
}

function p4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fourth promise resolved");
    }, 2000);
  });
}

// Start chaining the promises

p1()
  .then((res) => {
    console.log("p1", res);
    return p2();
  })
  .catch((err) => {
    console.log("p1--------------------", err);
    throw err; // Re-throw the error to prevent the next 'then' from executing
  })
  .then((res) => {
    console.log("p2->", res); // This will not execute for p2
    return p3();
  })
  .catch((err) => {
    console.log("p2", err);
    throw err;
  })
  .then((res) => {
    console.log("p3", res); // This will not execute for p2
    return p4();
  })
  .then((res) => {
    console.log("p4", res);
    console.log("All promises completed successfully");
  })
  .catch((err) => {
    console.log("finally", err);
  });

//By adding throw err; in the catch blocks, you re-throw the error to prevent the subsequent then from executing if an error occurs.
// This ensures that each catch block only handles errors from the preceding then block as expected.

somePromise
  .then((result) => {
    // Code in the first 'then' block
  })
  .catch((err) => {
    // Code in the 'catch' block for handling errors from the preceding 'then' block
    throw err; // Re-throwing the error to prevent subsequent 'then' blocks from executing
  })
  .then(() => {
    // Code in the second 'then' block
  })
  .catch((err) => {
    // Code in the 'catch' block for handling errors from the second 'then' block
  });

//Here's the explanation:

//The .then((result) => { /* code */ }) block executes some code when the promise is resolved.

//If an error occurs in the first then block, the control goes to the nearest catch block. In the catch block, throw err; is used to re-throw the same error. This is done to prevent the subsequent then block from executing.

//Without the throw err; statement, the execution would continue to the next then block even if an error occurred in the preceding then block. By throwing the error again in the catch block, you essentially propagate the error down the promise chain, skipping the subsequent then block.

//The second .then(() => { /* code */ }) block will only be executed if there was no error in the preceding parts of the promise chain. If there was an error, it would be caught by the next catch block.

//The final .catch((err) => { /* code */ }) block is for handling errors that may occur in the second then block or any subsequent blocks.

//In summary, adding throw err; in a catch block helps control the flow of execution by preventing subsequent then blocks from executing when an error occurs, ensuring that each catch block only handles errors from the preceding then block.

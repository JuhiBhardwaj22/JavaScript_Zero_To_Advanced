//
var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve,reject) =>{
            setTimeout(() => reject("Time Limit Exceeded"),t);
            fn(...args).then(resolve,reject);
        });
    }
};

//By Race method

// Approach
// We will first create original Promise that is return by fn and rejectedPromise that reject after T ms.
// Once we have these promises, we will return a promise betweeen these two which settles earliar.
var timeLimit = function(fn, t) {
	return async function(...args) {
           const originalPromise=fn(...args);
           const rejectPromise=new Promise((resolve,reject)=>{setTimeout(()=>{
               reject("Time Limit Exceeded")
           },t);
           });
          return Promise.race([originalPromise,rejectPromise]);  
    }
};
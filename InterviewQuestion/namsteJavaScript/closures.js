function a() {
  var x = 10;
  function b() {
    var y = 20;
    console.log(x);
    function c() {
      var z = 200;
      console.log(y);
    }
    c();
  }
  b();
}
a();

function a1() {
  var x1 = 300;
  function b1() {
    console.log(this);
    console.log(x1);
  }
  return b1;
}

var resFn = a1();
console.log(resFn); //300
resFn();

// we can also return like this

function f1() {
  var f = 1300;
  return function f2() {
    console.log(f);
  };
}

var retF = f1();
console.log(retF);
//invoke this function
retF();

//Interview question

function q1() {
  var a = 4000;
  function q2() {
    console.log(a);
  }
  a = 90000; // this value will be overrride because it refernce the a
  return q2;
}

var qs = q1();
qs();

//Uses

//---------------------------//
//1. Data Encapsulation and Private Variables:
//Closures allow you to create private variables and encapsulate data within a function's scope.
// This helps prevent unintended external access and modification of variables.

function counter() {
  let count = 0;
  return function () {
    console.log(count++);
  };
}
const incCount = counter();
incCount();
incCount();
incCount();

//2.Module Pattern: Closures enable you to create modules – self-contained units of code
//that expose only selected functions and data while keeping the rest private.
//This helps in organizing and structuring code.

const calculator = (function () {
  let result = 0;

  return {
    add: function (x) {
      result += x;
    },
    subtract: function (x) {
      result -= x;
    },
    getResult: function () {
      return result;
    },
  };
})();

calculator.add(15);
calculator.subtract(2);
console.log("Result ->", calculator.getResult()); // 3

//3 ->Memoization and Caching:

//Memoization is a technique where you store the results of expensive function calls and
//return the cached result when the same inputs occur again. This can significantly improve the
// performance of recursive algorithms.

//Example:-

const mul = function () {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      console.log("Loading....");
      const total = n * 10;
      cache[n] = total;
      console.log("cache", cache);
      return total;
    }
  };
};

const memoCache = mul();
console.log("memocache ->", memoCache(4));
console.log("memocache ->", memoCache(4));

//Callback function

function cb() {
  for (var i = 1; i <= 5; i++) {
    console.log("i", i);
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
cb();

//out - > 6 becoz setTimout function will store the cb function some other place for metioneed time
// in between loops will be continue and the final value will be 6 so when time will expired than
// it will refer the same place of i

//to solve the problem we can use let. let is block scope and it will create new scope for every loop

console.log("Let ");
function cb1() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
}
cb1();

// also we can solve using closres
//it store the refernce of i in closure
console.log("using Closures ");
function cb3() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(() => {
        console.log("Closures", i);
      }, 1000);
    }
    close(i);
  }
}
cb3();

//Closures GC

function a() {
  var x = 10;
  var z = 11;
  return function b() {
    console.log(x); //if put debuggger here and check value of z then will get error VM134:1 Uncaught ReferenceError: z is not defined
  };
}

var fun = a();
fun();

const add = function () {
  let cache = {};
  return function (n) {
    if (cache[n]) {
      return cache[n];
    } else {
      let sum = n + 100000000;
      cache[n] = sum;
    }
  };
};

const newFunc = add();
console.log("sum ->", newFunc(2));

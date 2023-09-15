function a() {
  console.log("a", this);
  return function b() {
    console.log("b", this);
  };
}

a()();

//outpuy: both will refer here window object
function a1() {
  console.log("a1", this); //this' refers to the global object
  this.value = 42;
  console.log("this.-1 ->", this.value);
  setTimeout(function () {
    console.log("setTimeout", this); //this' refers to the global object
    console.log("function ->", this.value);
  }, 1000);
}
a1();

function traditionalFunction() {
  this.value = 142;
  console.log("this.value ->", this.value);
  setTimeout(function () {
    console.log(this.value); // 'this' refers to the global object (e.g., 'window' in a browser) not the above decalre value
  }, 2000);
}

traditionalFunction();

// /Arrow functions, on the other hand, do not have their own this context. Instead, they inherit the this value from their enclosing (surrounding) function or scope.
function a2() {
  console.log("a2", this);
  this.value = 3000;
  setTimeout(() => {
    console.log("arrow fucn", this.value);
  });
}
a2();

function trdFun() {
  this.name = "Juhi";

  return (this.helloWorld = function () {
    console.log("10000 ->", this);
    console.log("this.name->", this.name);
  });
}

trdFun()();

//Area of circle

const radius = [2, 3, 4, 1];

const calCulateArea = function (radius) {
  const outPut = [];

  for (let i = 0; i < radius.length; i++) {
    outPut.push(Math.PI * radius[i] * radius[i]);
  }
  console.log("outPut----------------->", outPut);
  return outPut;
};

console.log("Circle Area->", calCulateArea(radius));

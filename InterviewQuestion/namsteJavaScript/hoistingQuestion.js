var valX = 10;
console.log("Var ->", valX);

let valLe = 20;
console.log("Let ->", valLe);

let valConst = 30;
console.log("Const ->", valConst);

// Now let me just whether we can host the let and const or not

//console.log("test Let", testlet);

let testlet = "New testing for let";

//console.log("test Const", testconst);

let testconst = "New testing for Const";

// now let me just show whether we can hoist the function or not

console.log("Function Normal ->", getData());

function getData() {
  console.log("Hi Normal function");
}

//Functiona Expression
//getFunExp();
var getFunExp = function () {
  console.log("Fe Testing");
};
//Arrow function

console.log("arrow function", getArrowData);

var getArrowData = () => {
  console.log("Arrow function");
};



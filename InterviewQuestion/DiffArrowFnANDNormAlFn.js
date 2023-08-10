// Normal function
const obj = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};
obj.greet(); // Output: Hello, John!

// Arrow function
//In this case this will refer the global object
const objArrow = {
  Firstname: "John",
  greet: () => {
    console.log("Hello, " + this.Firstname + "!");
  },
};
objArrow.greet(); // Output: Hello, undefined!

const objFunc = {
  type: "Coding",
  greetCoding: () => {
    console.log("inside method", this); //Window object
    function greeHello() {
      console.log("inside function working of this", this); //Window object
    }
    greeHello();
  },
};
objFunc.greetCoding();

const objFuncWithourArrow = {
  type: "Coding",
  greetCodingWithout() {
    console.log("inside method", this); // this will pass refernce of the function
    function greeHelloWithout() {
      console.log("inside function working of this", this);
    }
    greeHelloWithout();
  },
};
objFuncWithourArrow.greetCodingWithout();

console.log("objFuncWithourArrow", objFuncWithourArrow);

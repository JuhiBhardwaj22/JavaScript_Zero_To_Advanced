function getUserinfo({ name, age }) {
  console.log("name", name);
  console.log("age", age);
}

const obj = {
  name: "juhi",
  age: 26,
};
getUserinfo(obj);

//The syntax that we used before is called a Function Declaration:
function sayHi() {
  console.log("This is Function Declaration");
}
sayHi();

//There is another syntax for creating a function that is called a Function Expression.
console.log("Expression Example");
let sayHello = function () {
  console.log(" Function Expression");
};

console.log("print whole function sayHello() ->", sayHello()); // output will be undefined
console.log("print whole function sayHello ->", sayHello); // here it will print whole function

// By this way we can assign into new variable
const text = sayHello;
text();

console.log("-----Arrow Funtion--------");

let func = ({ name, age, gender }) => {
  console.log("User Info :-", name, " ,", age, ", ", gender);
};
const userData = {
  name: "juhi",
  age: 26,
  gender: "female",
};
func(userData);

console.log("Bind Example");

//When we bind an already bound function in JavaScript, it does not change the execution
//context because the context object will always be the one specified with the first bind, because it cannot be overwritten
function greet() {
  console.log(this.name);
}

const sayHellow = greet.bind({ name: "Tom Cruise" });
sayHellow();

const sayHellow1 = sayHellow.bind({ name: "Juhi Bhardwaj" });
sayHellow1();

const sayHellow2 = sayHellow1.bind({ name: "Mahi Jha" });
sayHellow2();

console.log("Example of setTimeOut");

//the setTimeout() function creates its own scope
//this will refer the Window  Object or Global Object
function greetsetTimeout() {
  let name = "Mahi";
  setTimeout(function () {
    console.log("mname own scope-- >", name);
    console.log("inside callback function ->", this);
  }, 500);
}
greetsetTimeout.call({ name: "Juhi" });

//To fix this issue, you can use arrow function syntax, which does not create its own this context.
//in this case this will be refer to object not window objct
function greetArrow() {
  setTimeout(() => {
    console.log(this.name);
  });
}

greetArrow.call({ name: "Daniel Craig" });

console.log("Another Example");

function Employees(name) {
  this.name = name;
  console.log("this.name", this.name);
}

Employees.prototype.getName = () => {
  console.log("this.name", this.name);
  return this.name;
};

const data = new Employees("jsonDtata");
console.log("data ->", data.getName());

const funcArrow = (age) => {
  this.age = age;
  console.log(" this.age", this.age);
};
const newArrow = funcArrow;

console.log("age", newArrow(23));

//Another example of this
var name = "Juhi Bhardwaj";
this.name = "Mahi Jha";
function Test(name) {
  console.log("this test name->", name);
  console.log("this test ->", this.name);
}
Test(name);

//This Example

const ThisExample = {
  TestData() {
    console.log("This Testing ->", this); //here this will refer the current object
  },
};

ThisExample.TestData();

const ThisTest = {
  TestingThis() {
    var self = this; //if we want to pass this refernce for current function then we need to do like this
    setTimeout(function () {
      console.log("Inside setTimeout", this); // But here this will refer the window object in case of setTimout as function
      console.log("Inside setTimeout self", self);
    }, 6000);
    setTimeout(() => {
      console.log("Inside setTimeout", this); // But here this will refer the current function
    }, 6000);
  },
};

ThisTest.TestingThis();

const objThis = {
  name: "John",
  greetThis() {
    const hello = () => {
      console.log(`Hello Arrow Funcion, ${this.name}!`);
    };
    hello();
  },
};

objThis.greetThis(); // logs "Hello, John!"

//Certainly! The reason you're getting the Window object inside the helloFun function is due to
//the way regular functions (function helloFun() {...}) handle the this keyword.

//In JavaScript, when a regular function is called, the value of this is determined by how the
//function is called, not where the function is defined. In your case, helloFun is called as a standalone
//function within the greetThisFun method, so its this value is not automatically bound to the object (objThisFun) where it is defined.

const objThisFun = {
  nameFun: "John",
  greetThisFun() {
    console.log("inside method", this); // refernce will pass inside method
    function helloFun() {
      console.log(this); //Window object
      console.log(`Hello Function, ${this.nameFun}!`);
    }
    helloFun();
  },
};

objThisFun.greetThisFun(); // logs "Hello, John!"

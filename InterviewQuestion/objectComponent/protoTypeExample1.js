const arr = ["Juhi", "Jha"];

const obj1 = {
  name: "Mahi",
  city: "Noida",
  getInfo: function () {
    console.log("Name :  " + this.name + "City : " + this.city);
  },
};

let obj2 = {
  name: "Juhi",
};

// by this way we can access the object
obj2.prototype = obj1;
obj2.prototype.getData = function () {
  console.log("Info -> By attaching protoype");
};
console.log("obj2", obj2);
console.log("obj1 ", obj1);
console.log("arr -> ", arr);

//In JavaScript, the prototype chain is closely associated with constructor functions.
//When you create objects using constructor functions, you can use the prototype to
// attach properties or methods that will be shared among all instances created from that constructor.
// Constructor function
function Greet() {}

// Adding a method to the prototype
Greet.prototype.data = function () {
  return "testFunction";
};

// Creating an instance
const greetInstance = new Greet();

// Accessing the method through the prototype
console.log("greetInstance", greetInstance.data());

// Modifying the prototype affects all instances
Greet.prototype.getinfo = "hello, I am here";

// Accessing the new property through the instance
console.log("greetInstance with prototype property", greetInstance.getinfo);

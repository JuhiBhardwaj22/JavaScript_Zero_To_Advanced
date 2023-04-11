function Human(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      return this.firstName + " " + this.lastName;
    });
}

let person1 = new Human("Juhi", "Bhardwaj");
let person2 = new Human("Mahi", "Jha");

console.log("person1 - >", person1);
console.log("person2 - >", person2);
console.log("Human.prototype ->", Human.prototype);

//The prototype object of the constructor function is shared among all the objects created using the constructor function.

//---------------Prototype Object------------

//As a prototype object is an object, we can attach properties and methods to the prototype object.
//The new property can be added to the constructor function’s prototype property using either the dot notation or square bracket notation as shown below:
Human.prototype.name = "Ashwin";
console.log(Human.prototype.name); //Output: Ashwin

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);

///Example 3

function Test(name) {
  this.name = name;
}

const objCons = new Test("Juhi");

console.log("objCons", objCons);

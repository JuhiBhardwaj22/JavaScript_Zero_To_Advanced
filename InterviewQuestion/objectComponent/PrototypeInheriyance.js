let Person = function (name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
};

let john = new Person("Juhi", "Female", "30");
console.log("John ->", john);

//let me attch the method into person prototype

Person.prototype.calCulateSalary = function () {
  console.log("prototype set ");
};

console.log("john", john);
john.calCulateSalary();

//Static method in FUnctiona

Person.greet = function () {
  console.log("Static method atatch only function or class");
};

Person.greet();

const test = {
  name: "Test",
};

//try by proto

test.__proto__.age = 30;
console.log("By proto", test);

//By prototype
//this will work only when object is constructor function
//Get Error
// test.prototype.age = function () {
//   console.log("testtt-prototype");
// };
// console.log("By proto", test);

//Prototyple Inheritance also possible by using object.create

let person = {
  calCAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  greet() {
    console.log("greeting !!");
  },
};

let newPerson = Object.create(person);
newPerson.name = "Mahi";
newPerson.birthYear = 1996;
newPerson.getInfo = function () {
  console.log("Hello");
};
console.log("newPerson ", newPerson);
console.log("object ->", newPerson.calCAge());

let merry = Object.create(person, {
  name: { value: "Juhi" },
  birthYear: { value: 1992 },
});

console.log("merry ->", merry);

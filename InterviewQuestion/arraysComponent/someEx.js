//Some example
let numbers = [10, -30, 20, 50];
let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log("containsPositive", containsPositive); //true

//Let's say we have a list of employees and we want to check
//if a particular employee is present in that array or not. We also want to get the index
// position of that employee if the employee is found.
const employees = [
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridon", age: 25 },
  { name: "John Carte", age: 50 },
];

let indexValue;
let newArr = employees.some(function (elm, index, arr) {
  const isFound = elm.name.indexOf("John") > -1;
  console.log("found", isFound);
  if (isFound) {
    indexValue = index;
  }
  return isFound;
});

console.log("Employee Present ->", newArr + " id for employe ->" + indexValue);

//using find and findIndex

let id = 0;
let empName = "";
let empl = employees.find(function (elm, i, arr) {
  const findEmpl = elm.name.indexOf("John Carte") > -1;
  if (findEmpl) {
    id = i;
    empName = elm.name;
  }
  return findEmpl;
});
console.log("Employe info", empName + "id:" + id);

function Person(salary, year) {
  console.log("salary", salary);
  console.log("year", year);
  console.log("this", this);
}
const info = {
  name: "Juhi",
  age: 30,
};

//The call method is used to invoke a function with a specified this value and individual arguments.
//call is used when you want to pass arguments individually.
Person.call(info, "30000", "January");

//With the introduction of ES6 and the spread operator, you can achieve similar results with call using the spread syntax:

Person.call(info, ...["30000", "January"]);

//apply
function getInfo(salary, year) {
  console.log("salary", salary);
  console.log("year", year);
  console.log("this", this);
}
const details = {
  name: "Juhi",
  age: 30,
};
// /The apply method is similar to call, but it takes an array or an array-like object as
//the second parameter for the arguments.
//apply is used when you want to pass arguments as an array or an array-like object.
getInfo.apply(details, ["30000", "January"]);

//Both call and apply are useful when you need to control the this value and provide arguments to a function explicitly.

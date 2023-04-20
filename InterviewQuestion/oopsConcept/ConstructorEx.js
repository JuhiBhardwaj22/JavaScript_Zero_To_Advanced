//Constructor Function
//By using function decalartion
function createData(_name, _company, _color) {
  // Basically this ={} this will be empty object
  //what we are doing we assign a this.name to _name value
  this.name = _name;
  this.company = _company;
  this.color = _color;

  //we can also create method here

  this.derive = function () {
    console.log("Car Color :-", this.color);
  };
}
const car1 = new createData("Swift", "TATA", "Black");
const car2 = new createData("XY", "BMW", "Red");
console.log("car1", car1);
console.log("car2", car2);

car2.derive();

//By using function Expression

let Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    console.log("Full Data ->", this.name);
  };
};

let p1 = new Person("Juhi", "23");

//------------------NOTE-------------
//First P1 will create empty object behind the seen
//p1 ={};
//this = p1
//p1.name = "juhi"
//p1.age = 23

console.log("p1", p1);
p1.getInfo();

//Class

class UserInfo {
  constructor(name, age) {
    this.Firstname = name;
    this.Userage = age;
  }
  getData() {
    return `My Name is ${this.Firstname} , age:- ${this.Userage}`;
  }
}

const p1 = new UserInfo("Juhi", 23);

console.log(p1.getData());

//Inheritance

class EmpUser extends UserInfo {
  constructor(name, age, id) {
    super(name, age);
    this.empID = id;
  }
}

const p2 = new EmpUser("Mahi", 29, "1234");

console.log(p2.getData());

console.log("p2", p2);

//Function construtor

function PersonInfo(name, age) {
  this.name = name;
  this.age = age;
}

const obj1 = new PersonInfo("ABCDD", 2345);

console.log("obj1 ->", obj1);

//Encapsulation

class UserInfo1 {
  constructor(name, age) {
    this.Firstname = name;
    this.Userage = age;
  }
  getData() {
    return `My Name is ${this.Firstname} , age:- ${this.Userage}`;
  }

  increament() {
    return this.Userage++;
  }
}

const p3 = new UserInfo1("Juhi", 23);

p3.increament();
console.log(p3.getData());

console.log("Count ->", p3.increament());

// Abstraction example
function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  //By doing this we can make it private
  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last
            name is: ${lastname}`;
  };

  this.getDetails_access = function () {
    return `First name is: ${firstname}, Last
            name is: ${lastname}`;
  };
}
let person1 = new person("Mukul", "Latiyan");
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());

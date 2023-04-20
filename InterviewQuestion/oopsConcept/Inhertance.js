class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age); //so that parent class object will get access
    this.subject = subject;
  }
}

let pObj = new Person("Juhi", 30);

let tObj = new Teacher("Mahi", 20, "React");

console.log("pObj", pObj);
console.log("tObj", tObj);

let test = {
  name: "Juhi",
};
console.log("Name", test);

//test.prototype.age = "30";
test.__proto__.id = 123;
console.log("data", test);

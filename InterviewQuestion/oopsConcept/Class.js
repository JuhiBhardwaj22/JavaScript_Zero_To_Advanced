//Class decalration

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // by this way we don't need to attach using prototype
  calAge() {
    console.log("Calculate age");
  }
  //Static method attach only classs
  static greet() {
    console.log("Hello Greeting!!!");
  }
}

const p1 = new Person("Juhi", 23);
const p2 = new Person("Mahi", 33);
//Ways of accessing static method
Person.greet();
console.log("P1 ->", p1);
console.log("P3 ->", p2);

//Class expression

let User = class {
  constructor(userName, pwd) {
    this.userName = userName;
    this.pwd = pwd;
  }

  set setPwd(val) {
    if (val.length < 8) {
      alert("Please enter 8 keyword");
    } else {
      this.pwd = val;
    }
  }
};

let emp = new User("Juhi", "hbfhgdfgfg");
console.log("emp ->", emp);

emp.setPwd = "Sanj";
console.log("emp ->", emp);

emp.setPwd = "djshdhdbfb";
console.log("emp ->", emp);

//you can attach properties to the prototype of a class. When you attach a property to the prototype,
// it becomes shared among all instances of that class. This is a common practice for adding methods to
//a class that should be accessible to all instances.

//Keep in mind that modifying the prototype affects all instances of the class,
//so changes to the prototype are reflected in all existing and future instances of that class.
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Attaching a method to the prototype
Animal.prototype.makeSound = function () {
  console.log("Some generic sound");
};

const cat = new Animal("Whiskers");
const dog = new Animal("Buddy");

cat.makeSound(); // Output: Some generic sound
dog.makeSound(); // Output: Some generic sound

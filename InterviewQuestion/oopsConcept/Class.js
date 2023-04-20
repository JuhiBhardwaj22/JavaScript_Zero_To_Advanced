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

//1.  What will be the output of the following question?

var myObject = {
  foo: "bar",
  func: function () {
    console.log("outer func: this.foo = " + this.foo);
  },
  func2: () => {
    console.log("outer func2: this.foo = " + this.foo);
  },
};
myObject.func(); //outer func: this.foo = bar
myObject.func2(); //outer func2: this.foo = undefined

//2. What will be the output of the following question?

const a = {};
const b = { key: "b" };
const c = { key: "c" };
//key can be only primitive so thats why value is 456
a[b] = 123;
a[c] = 456;
console.log(a[b]);

//3. What will be the output of the following question?

let obj1 = { name: "I love js" };
let arrObj = [obj1];
obj1 = null;
console.log(arrObj); //Get the obj1 value

//4. What will be the output of the following question?

let a = {
  name: "I love js",
};

function changeObject(v = { ...a }) {
  console.log(v);
}
changeObject(null);
changeObject(undefined);

//Answer :- Null and then object.

//Null: It is passing as an intentional value therefore "v" will be assigned to null.

//Undefined: By passing undefined, it will consider like no argument has passed therefore it will pick object as a default parameter

//5. What will be the output of the following question?

function changeProperty(person) {
  person.age = 25;
  person = {
    name: "John",
    age: 50,
  };
  return person;
}

const personObj1 = { name: "Alex", age: 30 };
const personObj2 = changeProperty(personObj1);
console.log(personObj1);
console.log(personObj2);

//6. What will be the output of the following question?
var val = 21;

function output() {
  console.log(val);
  var val = 33;
}

output();

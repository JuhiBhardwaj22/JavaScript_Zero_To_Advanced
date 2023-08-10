//Structured Clone Example

// this method will do deep cloniing without mutation the original object
const obj = {
  name: "Juhi",
  address: {
    city: "Noida",
    state: "Haryana",
  },
  hobbies: ["reading", "music"],
};

const copyObj = structuredClone(obj);
copyObj.address.city = "Panipat";

console.log("Original Object ->", obj);
console.log("Deep copy Object ->", copyObj);

//object.assign()

//this will not do nested deep copy
const copyObj = Object.assign({}, obj);
//Delete keyword

const obj1 = {
  name: "Juhi",
  age: 40,
};

delete obj1.age;

console.log("delete on object ->", obj1); //{name: 'Juhi'}
console.log("delete on object age ->", obj1.age); //undefined
const arr = [1, 2, 3, 4, 6];
delete arr[2];
console.log("arr ->", arr);
console.log("arr ->", arr[2]);

//Object.defineProperty()

const person = {
  name: "Juhi Bhardwaj",
};

//Read Only Property
Object.defineProperty(person, "name", { writable: false });
person.name = "Mahi";
console.log("Read Only when false ->", person);

//Modify
Object.defineProperty(person, "name", { writable: true });
person.name = "Mahi Jha";
console.log("Read Only when true ->", person);

//enumerable
//enumerable: false in this case we can't access
Object.defineProperty(person, "name", { enumerable: false });
for (let key in person) {
  console.log("Can't accesed n false ->", key);
}
//Output Nothing

//enumerable: true in this case we can access
Object.defineProperty(person, "name", { enumerable: true });
for (let key in person) {
  console.log("Can't accesed n false ->", key);
}

//configurable: false in this case we can't delete
//if we set true then we can delete
Object.defineProperty(person, "name", { configurable: false });
delete person.name;
console.log("configurable - false", person);

//Binding issue

let obj2 = {
  name: "Juhi",
  printName: function () {
    console.log("Name:-", this.name);
  },
};
//in this case this will point to the global object instead of intended object
//obj2.printName -> in this case this will refer to intended object
let fn = obj2.printName;
fn(); //Output will be undefined

// by using bind we can resolve this issue
//function prototype
let fnBind = obj2.printName.bind(obj2);
fnBind(); //Name:- Juhi

//****************** Object.assign() *********************************//

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const obj = Object.assign(target, source);
//b key is same in both object so in that case it will replcae by source key and value
console.log("obj", obj); //{a: 1, b: 4, c: 5}

//If i will modify source here let see what happend
source.c = 15;
console.log("obj-after modify source", obj);
console.log("after modify source", source);

obj.a = 10;
console.log("obj-after modify target", target);

// As per above obj and target both have same refrence

//Example -1

//lets supppose if we have nested object
const target1 = {
  a: 1,
};
const source1 = {
  b: {
    name: "Juhi",
  },
  c: 5,
};

const obj1 = Object.assign(target1, source1);
source1.b.name = "Test"; // here it will change the name value
console.log("obj1 with nested object", obj1);
//The reason is that name is reference value while the first a is a primitive value
//both source1 and obj1 references different objects but these objects reference the same name objects.

//********************************Object.create *********************************//

//1. Pass null
const person = Object.create(null);
console.log("person-with-null  ->", person); //Object with prototype object as null

person.name = "Juhi";

console.log("person-with-Value  ->", person); // with name property

//So let me just now pass object

//2. prototypeObject: Newly created object’s prototype object. It has to be an object or null.
const ObjC = {};

const ObjFunc = Object.create(ObjC);
ObjC.name = "Juhi";
console.log("ObjFunc with only first argument", ObjFunc); //so here name is added into the prototype of the object

//3.propertiesObject: Properties of the new object. This argument is optional

const ObjC1 = {};

const ObjFunc1 = Object.create(ObjC1, {
  name: {
    value: "Juhi",
  },
});

console.log("ObjFunc-name with 2nd argument", ObjFunc1); //so here name is added into the prototype of the object

//********************************Object.entries() *********************************//

const objEntries = { name: "Adam", age: 20, location: "Nepal" };

console.log("Object Entris Example", Object.entries(objEntries));

for (let [key, vale] of Object.entries(objEntries)) {
  console.log(`${key} : ${vale}`);
}

//Example 2: entries() With Randomly Arranged Keys
// keys are arranged randomly
const objE = { 42: "a", 22: "b", 71: "c" };

// returns key-value pairs arranged
// in ascending order of keys
console.log(Object.entries(objE));

// Output: [ [ '22', 'b' ], [ '42', 'a' ], [ '71', 'c' ] ]

//Example 4: entries() With Strings

const str = "code";

// use entries() with the above string
console.log(Object.entries(str));

// Output: [ [ '0', 'c' ], [ '1', 'o' ], [ '2', 'd' ], [ '3', 'e' ] ]
//key - the index of each character in the string

//********************************Object.freeze() *********************************//

const objFreeze = {
  prop: 42,
};

Object.freeze(objFreeze);
console.log("original objFreeze", objFreeze);

//trying to change the value of object or modifying
objFreeze.prop = 667; // Throws an error in strict mode but here we willl get same value

console.log("Modify objFreeze", objFreeze);

// Let me add new property into objFreeze

objFreeze.val = 1000;

console.log("add new property into objFreeze ", objFreeze); // Throws an error in strict mode but here we willl get same value
// we can't reaasigned also
let objFreeze1 = objFreeze;
objFreeze1.age = 444;
console.log("objFreeze1", objFreeze1);

//********************************Object.seal() *********************************//

const objSeal = {
  prop: 101,
};

Object.seal(objSeal);
//Can;t add new property
objSeal.num = 3212;
console.log("objSeal-adding new property", objSeal);

objSeal.prop = 50000;

console.log("objSeal-Modify  existing property", objSeal);

//Re-assigned also not possible

let objSeal1 = objSeal;
objSeal1.text = "Juhi--Seal";
console.log("objSeal-Re-assigned", objSeal1);

//********************************Object.keys() *********************************//

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]

//********************************Object.values() *********************************//

const object12 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object12));
// Expected output: Array ["somestring", 42, false]

//********************************Object.is() *********************************//

//The Object.is() static method determines whether two values are the same value.

let obj = {
  name: "juhi",
};

let user = obj;
console.log("obj", obj);
console.log("user", user);

//We can use either variable to access the object and modify its contents:
//if we have same refrence the we can easliy modify the value
user.age = 30; // this will  modify the main object
user.name = "Users";

console.log("after update obj", obj);
console.log("after update user", user);

//---------Example - 1 ---------------------------------------------//

let a = {};
let b = a;
console.log("a==b", a == b); //true
console.log("a===b", a === b); //true
//beacuse both variables reference the same object

//-----------------Example -2---------------------------------------------//

//And here two independent objects are not equal, even though they look alike (both are empty):
let a1 = {};
let b1 = {};
/// two independent objects and reference is diff
console.log("a1 == b1", a1 == b1); //false
console.log("a1 === b1", a1 === b1); //false

//--------------------Example -3 --------------------------------------------//
//Cloning and merging, Object.assign
let data = {
  name: "John",
  age: 30,
};

let info = {}; // the new empty object

// let's copy all data properties into it
for (let key in data) {
  info[key] = data[key];
}
console.log("before update info", info);

info.name = "Juhi";
info.email = "juhi@gmail.com";
console.log("afte update info", info);
console.log("after update data", data);

//--------------------Example -3 --------------------------------------------//

let x = 2;
let y = x;
y = 3;
console.log(x);
console.log(y);

//2 and 3

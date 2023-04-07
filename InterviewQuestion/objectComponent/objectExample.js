// Example -1

function getUserinfo(name, age) {
  return {
    name: name,
    age: age,
  };
}

let userInfo = getUserinfo("Juhi", 30);

console.log("userInfo", userInfo);

// Example -2

let arr = ["juhi", 20, 31];

function getUserinfo1(arr) {
  arr.forEach((element) => {
    console.log("elm  ->", element);
  });
}
getUserinfo1(arr);

// Example -3

let arrUser = {
  name: "Juhi",
  age: 30,
  email: "Juhi@gmail.com",
};

function getUserinfo3({ name, age, email }) {
  return {
    name,
    age,
    email,
  };
}

let userInfo3 = getUserinfo3(arrUser);

console.log("userInfo3", userInfo3);

//For In Looop Example for iteration

let forinfo = {
  name: "Juhi",
  age: 30,
  email: "Juhi@gmail.com",
};

function getInfo(obj) {
  for (let key in obj) {
    console.log("key : -", key);
    console.log("Value : -", obj[key]);
  }
}

getInfo(forinfo);

//Example-4
//Multiply numeric property values by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      console.log("Multiply -> ", obj[key] * 2);
    }
  }
}
multiplyNumeric(menu);

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

const data = [
  { name: "Juhi", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Job", age: 28 },
];

const optimezData = data.map((person) => ({
  ...person,
  ageGroup: person.age > 27 ? "Adult" : "Young",
  greeting: person.age > 27 ? `Helooo thnaks: - ${person.name}` : "",
}));

console.log("optimezData", optimezData);

//Interview question
//The curly braces {} are used to define the body of the arrow function,
//and you're returning a JSX element (<div></div>) for each item in the array.
objectvalue.map((item) => {
  return <div></div>;
});

//2
//This syntax { ...person } is a concise way of creating a new object with all the properties and values of the original person object.

//Here's why the round brackets are important:--
// When you're using an arrow function to return an object literal directly
//, you need to wrap the object literal in parentheses. Otherwise, JavaScript might interpret the curly braces as the start
//of a block of code for the function body instead of an object literal.

//So, the round brackets around { ...person } in (person) => ({ ...person }) are used to indicate that you're
// returning an object literal, and not defining a block of code for the function body.
const optimezDataq = data.map((person) => ({
  ...person,
}));

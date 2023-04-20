//Basic variable assignment

const foo = ["one", "two", "three"];

const [numOne, numTwo, numThree, numFour] = foo;

console.log("numThree ->", numThree); //three
console.log("numFour ->", numFour); //undefined

//Q1.How to Do Direct Array Destructuring
const [firstName, lastName, website] = ["ABC", "DEF", "GHI"];

console.log(firstName); // "ABC"

//Q2.How to Use Array Destructuring to Assign the Rest of an Array Literal to a Variable

const arr = ["ABC", "DEF", "GHI", "KIU"];

const [first, second, ...rest] = arr;
console.log("second", second);
console.log("rest", rest);

//Q3.How to Use Array Destructuring to Extract Values at Any Index
const [, , url] = ["Oluwatobi", "Sofela", "codesweetly.com"];

console.log("url", url);

//Q4.How Default Values Work in an Array Destructuring Assignment

const userInfo = ["Juhi", "30", "Panipat"];

const [name, age, city, state = "Haryana"] = userInfo;
console.log("userinfo", userInfo);
console.log("state ->", state);

//Q5.How to Use Array Destructuring to Extract Values from an Array to a Function’s Parameters

// Define an array with two items:
const profile = ["Oluwatobi", "Sofela"];
function userProfile([firstName, lastName]) {
  return `FirstName: ${firstName}   LastName: ${lastName}`;
}
console.log("user-profile", userProfile(profile));

//Q6
// Define an array with two string values and one nested array:
const prof = ["gfg.com", "Female", "React", ["Juhi", "Bhardwaj"]];

function getUserBio([website, , , [userName, lastName]]) {
  console.log("website ->", website);
  console.log("userName", userName, lastName);
  return `${userName} runs ${website}`;
}

// Invoke getUserBio while passing the profile array as an argument:
console.log("Bio ->", getUserBio(prof));

//Q7.How to Invoke a Function Containing Array Destructuring Parameters Without Supplying Any Argument

//1. -> Consider the function below:
function getUserData([firstName]) {
  console.log(
    "Do something else that does not need the destructuring parameter."
  );
  return `My name is ${firstName}.`;
}
// invoke the getUserBio function without passing any argument

// getUserData();
//O/P:- the browser will throw an error similar to TypeError: undefined is not iterable

//so we can resolve above issue by assign a defult value
function getUserDataDeafult([firstName] = []) {
  console.log(
    "Do something else that does not need the destructuring parameter."
  );
  return `My name is ${firstName}.`;
}

getUserDataDeafult();

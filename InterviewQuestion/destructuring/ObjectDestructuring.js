//Without using the object destructuring assignment technique,
//we would extract an object’s value into a new variable like so:
const profile = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const website = profile.website;

console.log(firstName); // "Oluwatobi"
console.log(lastName); // "Sofela"
console.log(website); // "codesweetly.com"

//By Destrutring example
const info = {
  name: "Mahi",
  surName: "Jha",
  url: "url",
};
const { name, surName, url } = info;
console.log("name->", name);
console.log("surName->", surName);

//

const lists = {
  empName: "Juhi",
  empCode: 1234,
  empLocation: "Noida",
};

const {
  empName: EmployeName,
  empCode: EmployeID,
  empLocation: EmployeLocation,
} = lists;

console.log("Employe Data ->", EmployeName, EmployeID, EmployeLocation);

//Q2. How to Use Object Destructuring When the Property’s Name Differs from That of the Variable
const profile1 = {
  firstName: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

const {
  firstName: forename,
  lastName: surname,
  website: onlineSite,
} = profile1;

console.log(forename); // "Oluwatobi"
console.log(surname); // "Sofela"
console.log(onlineSite); // "codesweetly.com"
console.log(website); // "ReferenceError: website is not defined

//Q3.How to Use Object Destructuring to Assign the Rest of an Object to a Variable
const { firstName1, ...otherInfo } = {
  firstName1: "Oluwatobi",
  lastName: "Sofela",
  website: "codesweetly.com",
};

console.log(firstName1); // "Oluwatobi"
console.log(otherInfo); // {lastName: "Sofela", website: "codesweetly.com"}

//Q4. How to Use Object Destructuring to Extract Values from Properties to a Function’s Parameters

const data = {
  lsit: "ONE",
  id: 123,
  test: "Yes",
};

function getData({ lsit = "two", ...res }) {
  console.log("list ->", lsit);
  console.log("res ->", res);
}
getData(data);

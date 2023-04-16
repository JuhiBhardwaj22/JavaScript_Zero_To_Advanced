const employees = [
  { name: "David test", age: 10 },
  { name: "David Carlson", age: 30 },
  { name: "John Cena", age: 34 },
  { name: "Mike Sheridan", age: 25 },
  { name: "John Carte", age: 50 },
];

const lits = employees.find((list) => {
  if (list.age < 35) {
    return employees;
  }
});
console.log("lits", lits);
console.log("employees", employees);
//returns the first element in the provided array that satisfies the provided testing function.
//{name: 'David test', age: 10}

const newList = employees.find((list) => {
  console.log("index", list.name.indexOf("John"));
  return list.name.indexOf("John") > -1; // for john we get indexOf 0 thats why we added >-1 so that we will get john value
});

console.log("newList ->", newList);

//Q1. Convert Array into Object
const users = [
  ["juhi", "India", 20],
  ["Mahi", "US", 30],
  ["Sandy", "UK", 40],
];

const result = users.map((user) => {
  const [name, country, age] = user;
  //Destrutruing to get values of individual sub-array of the input
  console.log(name, country, age);

  //We can do by both return
  // return { name: name, country: country, age: age };
  //If the key name and the variable name holding the value are the same then
  // we can skip the colon and the variable name
  return { name, age, country };
});

console.log("result ->", result);

//Output

// [{name: 'juhi', age: 20, country: 'India'}
// {name: 'Mahi', age: 30, country: 'US'}
// {name: 'Sandy', age: 40, country: 'UK'}]

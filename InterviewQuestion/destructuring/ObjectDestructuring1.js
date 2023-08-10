//1. Use destructruing to retrieve value from an object
const person = { name: "Juhi", age: 30 };

const { name, age } = person;
console.log("Name ->", name);

//pass new value also
const { name: fisrtName, age: ageInfo, state = "Harya like this" } = person;
//2. Use destructruing to retrieve value from an nested object

const empInfo = {
  empId: 2334,
  empName: "Juhi",
  empAge: 30,
  skills: {
    fe: "React, Vue",
    be: "Java",
  },
};

const {
  empName,
  empAge,
  skills: { fe, be },
} = empInfo;

console.log("skills", fe);

//pass key as an argument dynamic binding
function getDynamicValue(key) {
  const { [key]: retrunValue } = empInfo;
  console.log("retrunValue", key);
  return retrunValue;
}

const id = getDynamicValue("empId");

console.log("id ->", id);

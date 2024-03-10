//Shallow copy
//A shallow copy creates a new object, but it does not create new copies of nested objects.
// Instead, it copies references to the nested objects. Shallow copy is sufficient for simple data structures
//but may lead to unexpected behavior when dealing with nested objects.
const shallowObject = {
  Id: "GL",
  userInfo: {
    name: "Juhi Bhardwaj",
    age: 30,
  },
};

const newCopiedObject = shallowObject;

console.log("shallowObject", shallowObject);
console.log("newCopiedObject", newCopiedObject);

console.log("after modifictaion");

newCopiedObject.userInfo.age = 77;
console.log("shallowObject", shallowObject);
console.log("newCopiedObject", newCopiedObject);

//Deep copy

//A deep copy creates a completely independent copy of the original object, including all nested objects.
// It ensures that changes to the copied object do not affect the original object or vice versa.
const deepObject = {
  Id: "GL",
  userInfo: {
    name: "Juhi Bhardwaj",
    age: 30,
  },
};

const newDeepCopyObject = JSON.parse(JSON.stringify(deepObject));
console.log("deepObject", deepObject);
console.log("newDeepCopyObject", newDeepCopyObject);

console.log("after modifictaion");

deepObject.userInfo.name = "Mahi Bhardwaj";
newDeepCopyObject.userInfo.age = 77;
console.log("deepObject", deepObject);
console.log("newDeepCopyObject", newDeepCopyObject);

//Keep in mind that the deep copy using JSON.stringify and JSON.parse has some limitations.
//It won't work for objects containing functions, undefined, or circular references.
//For more complex scenarios, you might need to use specialized libraries like lodash's cloneDeep or implement a custom deep copy function.

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

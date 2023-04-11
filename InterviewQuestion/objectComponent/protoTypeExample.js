const protoExample = {
  name: "Hello Juhi",
};

// We can set any object into prototype using proto method

const test = {
  runProto: () => {
    console.log("Going to set this console value in above object");
  },
};

protoExample.__proto__ = test; // by this way we can set anything into above function
test.__proto__ = {
  name2: "Setting proto",
};
console.log("protoExample ->", protoExample);
protoExample.runProto();

console.log("name ->", protoExample.name2);
//Example another if same runProto function avialble in both

const protoExample1 = {
  name: "Hello Juhi",
  runProto: () => {
    console.log("Inside protoExample1 Object");
  },
};
const test1 = {
  runProto: () => {
    console.log("Going to set this console value in above object");
  },
};

protoExample1.__proto__ = test1; // by this way we can set anything into above function
console.log("protoExample1 ->", protoExample1);
protoExample1.runProto();

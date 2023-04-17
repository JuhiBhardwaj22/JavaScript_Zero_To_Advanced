const obj = new Map([
  ["a1", "Juhi"],
  ["a2", "Mahi"],
]);

console.log("map ->", obj);

//Set function

obj.set("a3", "Test");
obj.set("a2", "Mahi Jha"); // overides
console.log("set ->", obj);

//Get fuction

console.log("get ->", obj.get("a2"));

//has

console.log("has ->", obj.has("a2")); //trues

//size

console.log("size ->", obj.size);

//delete
console.log("delete ->", obj.delete("a2"));
console.log("delete ->", obj);

//forEach

obj.forEach((item) => {
  console.log("items", item);
});

//Weak Map
//the strong reference prevents removing the object from memory via garbage collection.
let dog = { name: "badger" };

const pets = [dog];

dog = null;

console.log("Strong Reference", pets); // [{ name: "badger" }]

//Weak reference
let pets1 = new WeakMap();
let dogy = { name: "Jacky" };
pets1.set(dogy, "okay");
console.log("pets1", pets1);

dogy = null;
console.log("pets1", pets1);

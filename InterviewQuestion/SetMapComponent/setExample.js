let myArr = [1, 1, 2, 3, 4];

const newSet = new Set(myArr);

console.log("newSet", newSet);

//add function

newSet.add(5);
console.log("add function->", newSet);

//size
console.log("size->", newSet.size);

//clear Function
newSet.clear();
console.log("Clear function->", newSet);

//add
const newSet1 = new Set(myArr);
console.log("myArr", newSet1);

//delete function
console.log("Delete function->", newSet1.delete(2));
console.log("myArr", newSet1);

//has funtion
console.log("Has function ->", newSet1.has(1));

const mySet = new Set([1, 2, 3, 4, 5]);
// Using for...of loop
for (const value of mySet) {
  console.log(value);
}

mySet.forEach((item) => {
  console.log("value", item);
});

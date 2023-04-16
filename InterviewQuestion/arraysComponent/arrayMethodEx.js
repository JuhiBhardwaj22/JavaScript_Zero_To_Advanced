// Fill Example

const array1 = [1, 2, 3, 4];

console.log("Fill Value ->", array1.fill("100", 1, 4));

//Push Example

const animals = ["pigs", "goats", "sheep"];
console.log("Push Value ->", animals.push("dogy", "cat")); //5
console.log("After push array value -> ", animals);
["pigs", "goats", "sheep", "dogy", "cat"];

const obj = [{ name: "Juhi", age: 30 }];

console.log("Push Length ->", obj.push({ name: "test", age: 40 }));

console.log("After push array value -> ", obj);

//Pop Example
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];
console.log(plants.pop());
// Expected output: "tomato
console.log("Plants ->", plants);

// Shift Example
const array2 = [1, 2, 3];

const firstElement = array2.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

//Unshift example
const array = [1, 2, 3];

console.log(array.unshift(4, 5));
// Expected output: 5

console.log(array);
// Expected output: Array [4, 5, 1, 2, 3]

//slice example
const animals1 = ["ant", "bison", "camel", "duck", "elephant"];
const newValue = animals1.slice(2, 4);
const newData = animals1.slice(-2, -1);
console.log("Slice With Original Array->", animals1);
console.log("After Slice With  Array->", newValue);

console.log("-ve value with slice ->", newData); //['duck']

//Splice example
const months = ["Jan", "March", "April", "June"];
const newMonths = months.splice(1);
console.log("org months ->", months); //['Jan']
console.log("updated newMonths ->", newMonths); // ['March', 'April', 'June']

const months1 = ["Jan", "March", "April", "June"];
console.log("newMonths1", months1.splice(1, 2));
//["March", "April"];
console.log("months1", months1);
//["Jan", "June"];

const months2 = ["Jan", "March", "April", "June"];
console.log("newMonths2", months2.splice(1, 3, "July", "Aug")); //['March', 'April', 'June']
console.log("months2", months2); //['Jan', 'July', 'Aug']

const months3 = ["Jan", "March", "April", "June"];
console.log("newMonths3", months3.splice(1, 0, "July", "Aug")); //[]
console.log("months3", months3); //['Jan', 'July', 'Aug']

//Includes Example
const array3 = [1, 2, 3];

console.log(array3.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat", "ctat"];

console.log(pets.includes("cat", 2));
// Expected output: true

console.log(pets.includes("at"));

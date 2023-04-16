console.log("typeof number ->", typeof number); //undefined

console.log("typeof Number ->", typeof Number); //function

console.log("typeof numbers ->", typeof numbers); //undefined

console.log("typeof numbers ->", typeof 123); //number

console.log("typeof numbers ->", typeof typeof 123); //string

console.log("typeof Infinity ->", typeof Infinity); // number

console.log("typeof isNaN ->", typeof isNaN); // function

console.log("typeof -Infinity ->", typeof -Infinity); // number

console.log("typeof NaN ->", typeof typeof NaN); // function

console.log("compare NaN == NaN", NaN == NaN); // false

console.log("compare NaN === NaN", NaN === NaN); //false

console.log("compare isNaN === isNaN", isNaN === isNaN); //true

console.log("number", Number === Number); //true

console.log("typeof nan", isNaN(NaN)); //true

console.log("typeof nan", isNaN(123)); //false

console.log("Not-A-Number.", typeof NaN);

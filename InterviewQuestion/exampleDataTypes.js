console.log("Null :- ", typeof NULL); // undefined
console.log("Null :- ", typeof Null); // undefined
console.log("null :- ", typeof null); // object
console.log("null -String :- ", typeof typeof null); // string

console.log("Undefined :- ", typeof Undefined); // undefined
console.log("undefined :- ", typeof undefined); // undefined
console.log("UNDEFINED :- ", typeof UNDEFINED); // undefined
console.log("undefined-string :- ", typeof typeof undefined); // string

console.log("NUMBER :- ", typeof NUMBER); // undefined
console.log("Number :- ", typeof Number); // function
console.log("Number :- ", typeof number); // undefined
console.log("number -String :- ", typeof typeof number); // string
console.log("typeof", typeof 123); //number

console.log("STRING :- ", typeof STRING); // undefined
console.log("String :- ", typeof String); // function
console.log("string :- ", typeof string); // undefined
console.log("string -String :- ", typeof typeof string); // string
console.log("typeof", typeof "123"); //string

console.log("BOOLEAN :- ", typeof BOOLEAN); // undefined
console.log("Boolean :- ", typeof Boolean); // function
console.log("boolean :- ", typeof boolean); // undefined
console.log("boolean -boolean :- ", typeof typeof boolean); // string
console.log("typeof", typeof false);

console.log("-------Boolean Example----------");

//true = 1
//false = 0
console.log("boolean-question - > ", true + 1); //2
console.log("boolean-question - > ", false + 1); //1
console.log("boolean-question - > ", false - 1); //-1
console.log("boolean-question - > ", true - 1); //0
console.log("boolean-question - > ", true - false); //1
console.log("boolean-question - > ", true - "1"); //this "1" treated as boolean o/p :- 0
console.log("boolean-question - > ", "1" + true); //1true // this will be treated as string
console.log("boolean-question - > ", false - "1"); // o/p : -1
console.log("boolean-question - > ", "2" - false); //o/p: 2 , in case of false it will act as 0

console.log("-------Symbol Example----------");

const id = Symbol("id");
const info = {
  name: "Juhi",
  [id]: 123, // Symbol id for unique
};
console.log("info ->", info);

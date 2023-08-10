// 1 .at Method

const str = "Hello Juhi welcome to the .at method";

console.log("at->", str.at(1)); //e
console.log("at->", str.at(-1)); //d last value
console.log("at->", str.at(100)); // undefined

//2 charAt() Methods

const charStr = "Hello Juhi welcome to the .at method";

console.log("charAt->", charStr.charAt(2)); //l
console.log("charAt->", charStr.charAt(-1)); // empty value
console.log("charAt->", charStr.charAt(100)); // empty value

// 3 concate methods

const conStr1 = "hello concate";
const conStr2 = "Juhi Start";

console.log("Concatenate ->", conStr1.concat(conStr2));

//4 endsWith Method

const endsStr1 = "Cats are the best";

console.log("endWith ->", endsStr1.endsWith("best")); // true

const endsStr2 = "Cats are the best Juhi";

console.log("endWith ->", endsStr2.endsWith("juh")); // false

//5 includes Methods

const incStr = "Testing by Juhi";

console.log("includes ->", incStr.includes("by")); //true

console.log("includes ->", incStr.includes("ing")); //true

console.log("includes ->", incStr.includes("Testeds")); //false

//6 indexOf(substr, [start]) Method
//first occurance
//space will also count as index

const sentence = "Hi,my name is Sam! is";

console.log("Indexof ->", sentence.indexOf("is")); //11
console.log("Indexof ->", sentence.indexOf("is", 13)); //19
console.log("Indexof ->", sentence.indexOf("juhi")); //-1

//7 lastIndexOf(substr, [start])
//Last occurance

const myString = "javascript t is rox juhi test is values";

console.log("lastIndexOf ->", myString.lastIndexOf("is")); //30 last index
console.log("lastIndexOf ->", myString.lastIndexOf("is", 6)); //-1 because it will try to search the
//"is " or string less thean index 6

const myString1 = "is my is juhi java is";
console.log("lastIndexOf ->", myString1.lastIndexOf("is", 11)); //6

//8 match method

const regX = /[A-Z]/g;
const matchStr = "Test Boy Juhi is good Moeny";

console.log("match - >", matchStr.match(regX)); //['T', 'B', 'J', 'M']
// null if no match founct

//9 trim()

const strTrim = "    Juhi   bhardwa   ";
console.log("Trim ->", strTrim.trim());

//10  repeat()
var string = "Welcome to Edureka";
console.log(string.repeat(3));

//11 Slic()

let text = "Hello world Juhi";

console.log("Slice ->", text.slice(4)); // o world Juhi , 4 will be starting index

console.log("Slice ->", text.slice(4, 13)); //o world J

console.log("Slice ->", text.slice(-3)); //uhi

//12 padStart
//append before String
const padStr = "Juhi";
console.log("padStart ->", padStr.padStart(8, "x")); //xxxxJuhi

//13 padEnd

//append end of string
const padEnd = "Juhi";
console.log("padEnd ->", padEnd.padEnd(16, "0")); // Juhi000000000000

//14 StartsWith()

const str1 = "Sat night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.startsWith("ni", 4));
// Expected output: false

//14 split

const strSplit = "The,juhi,test";

const words = strSplit.split(",");
console.log(words); //Array ["The", "juhi", "test"]

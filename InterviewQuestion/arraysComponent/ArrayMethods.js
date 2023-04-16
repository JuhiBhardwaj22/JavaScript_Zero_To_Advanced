//1 .at Method

const atArr = [5, 12, 8, 130, 44];
console.log("atArray ->", atArr.at(2)); //8
console.log("atArray ->", atArr.at(-1)); //44
console.log("atArray ->", atArr.at(15)); // undefined

//2 Concat

const conStr = [1, 2, 3];

const conStr1 = [4, 5];

console.log("concate ->", conStr.concat(conStr1)); //[1, 2, 3, 4, 5]

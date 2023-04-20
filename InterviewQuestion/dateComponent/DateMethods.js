//1.
//we will get current date and time and days
let date = new Date();

console.log("date ->", date);
//op:- Mon Apr 17 2023 15:11:20 GMT+0530 (India Standard Time)

let dateM = new Date(5000);
console.log("new Date(milliseconds) ->", dateM);

//Prototype allows us to add properties and methods to an object

//---------------getDate------------------------------------
//method is used to fetch the date of a month

console.log("getDate ->", date.getDate());

//---------------getDay------------------------------------
//An integer number, between 0 and 6, corresponding to the day of the week for the given date,
//it will return number , and count monday as 1
console.log("current date ->", date);
console.log("getDay ->", date.getDay()); // 1

//---------------getFullYear------------------------------------
//get year This method returns the year
console.log("getgetFullYearDay ->", date.getFullYear());

//---------------getHours()------------------------------------
//it returns the hour in a specified date.
console.log("getHours ->", date.getHours());

//---------------getMinutes()------------------------------------
//It returns the minutes in the specified date.
console.log("getMinutes ->", date.getMinutes());

//---------------getMonth()------------------------------------
//Return Value: It returns the Month for the given Date object.
//The month is an integer value ranging from 0 to 11. Zero (0) means January, 1 means February, and so on till 11 means December.
console.log("getMonth ->", date.getMonth());

//---------------getTime()------------------------------------
//This method returns the date in terms of numeric value as milliseconds.
console.log("getTime() ->", date.getTime());

//---------------setDate()------------------------------------
//The setDate() method changes the day of the month of a given Date instance.
date.setDate(21);
console.log("setDate() ->", date); //change the date

//same as setFullYear

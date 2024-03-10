//Q.1

[3, 2, 3, 4, 3]
  .find((i) => i == 3) //output = 3
  [(3, 2, 3, 4, 3)].filter((i) => i == 3); //[3,3,3]

//Q.2
var a = [1, 2, 3, 4, 5];
var b = [...a];
b.push(6);
console.log(b); //output:  [1,2,3,4,5,6]
console.log(a); //output : [1,2,3,4,5]

//Q.3

var arr = [NaN, 0, 15, false, -22, "", undefined, 47, null];

//In JavaScript, the `Boolean` constructor is used to convert a value to a boolean (true or false) value.
// When used as a function (i.e., `Boolean(value)`), it returns `false` for falsy values
//(`0`, `NaN`, `false`, `null`, `undefined`, `''`), and `true` for all other values.

//In the context of filtering an array, using `Boolean` as a callback function within the `filter` method effectively
// removes all falsy values from the array, leaving only the truthy values behind.
console.log("filter array", arr.filter(Boolean)); //filter array [ 15, -22, 47 ]

// 1. We want to filter out invalid numbers, like `NaN`, from our array.
// 2. The `isNaN(value)` function checks if a value is "Not a Number" (`NaN`). If it's not a number, `isNaN` returns `true`.
//If it's a number, it returns `false`.
// 3. But we want to filter out numbers, not non-numbers. So, we use `!isNaN(value)` instead. The `!` (logical NOT) operator
//negates the result of `isNaN(value)`. So, if `isNaN(value)` returns `true`, `!isNaN(value)` returns `false`, and vice versa.
// 4. This way, we ensure that `NaN` values are filtered out because `isNaN(value)` returns `true` for them, and `!true` equals `false`,
//meaning they won't pass the filter.

// In simpler terms, `!isNaN(value)` helps us identify if a value is a valid number. If it is, it passes through the filter;
//if it's not (like `NaN`), it's excluded from our filtered array.
var filteredArr = arr.filter(function (value) {
  return (
    value !== undefined &&
    value !== null &&
    value !== "" &&
    !isNaN(value) && // WE are maiking this condition false so that for NaN value it will return true and it will filter out the value so make it false so that whole condition will not excute as we use && operator
    value !== false
  );
});
console.log(filteredArr); // Output: [15, -22, 47]

// Yes, exactly! If any part of the `&&` condition evaluates to `false`, the entire condition will be `false`, and the value will not pass through the filter.

// In the context of `!isNaN(value)`, if `isNaN(value)` returns `true`, indicating that the value is not a valid number (like `NaN`), then `!isNaN(value)` will be `false`, and the entire condition `value !== undefined && value !== null && value !== '' && !isNaN(value) && value !== false` will be `false`, meaning the value will not pass the filter.

// So, by making any part of the `&&` condition evaluate to `false`, we effectively filter out values that don't meet our criteria.

var Temp1 = [
  { FirstName: "Vivek", Id: 1 },
  { FirstName: "Vinay", Id: 2 },
];
var Temp2 = [
  { LastName: "A", Id: 2 },
  { LastName: "D", Id: 1 },
];

//Expected Output  = [{FirstName:"Vivek", LastName:"D", Id:1},{FirstName:"Vinay", LastName:"A", Id:2}];

const newData = Temp1.map((item) => {
  const matchingID = Temp2.find((elmID) => elmID.Id === item.Id);
  return {
    FirstName: item.FirstName,
    LastName: matchingID.LastName,
    Id: matchingID.Id,
  };
});

console.log(newData);

var y = 1;
if (function f() {}) {
  console.log("f:-", typeof f);
  console.log("f:-", 1 + undefined);
  y += typeof f;
}
console.log(y); //1undefined

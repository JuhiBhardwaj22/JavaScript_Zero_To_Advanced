const numbers = [1, 2, 3, 4, 5];

//acc - intial value will be number[0] =1
const redArr = numbers.reduce(function (acc, curr, i, arr) {
  console.log("arr", arr);
  return acc + curr;
});

console.log("redArr ->", redArr);

// let me pass intial value 10

const newArr = numbers.reduce(function (acc, curr) {
  console.log("acc", acc);
  return acc + curr;
}, 10);

console.log("newArr ->", newArr);

const coordinates = [
    { x: 1, y: 2 }, 
    { x: 2, y: 3 }, 
    { x: 3, y: 4 }
  ];
  
  const sum = coordinates.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.x;
  }, 0);
  
  console.log(sum); // 6
  
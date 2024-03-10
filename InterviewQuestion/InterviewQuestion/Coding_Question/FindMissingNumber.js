// Example array with one missing number
const unsortedArray = [3, 7, 1, 2, 8, 4, 5, 0, 10, 9];
const num = 10;
function findMissingNumber(arr, n) {
  // Calculate the sum of numbers from 1 to n (inclusive).
  //Calculate sum of natrual number
  const totalSum = (n * (n + 1)) / 2;

  // Find the missing number by subtracting the actual sum from the expected sum
  const sumOfTheArrayValue = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(sumOfTheArrayValue);

  const missingValue = totalSum - sumOfTheArrayValue;
  return missingValue;
}
const missingNumber = findMissingNumber(unsortedArray, num);

console.log(`Missing Number is ${missingNumber}`);

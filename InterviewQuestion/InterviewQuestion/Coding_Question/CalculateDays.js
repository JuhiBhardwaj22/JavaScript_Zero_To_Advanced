const Date1 = new Date("01/01/2000");
const Date2 = new Date();
console.log(Date2);

// Calculate the difference in days
//This timeDiff variable represents the time difference in milliseconds
const timeDiff = Date2 - Date1;

const timeDiff1 = Date2.getTime() - Date1.getTime();
console.log("timeDiff", timeDiff);

// 1 seconds =  1000 milliseconds
//We use Math.floor() to round down the result to the nearest whole number to get the number of days.

const daysDifference = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

console.log(daysDifference);

const daysDifference1 = Math.floor(timeDiff1 / (1000 * 60 * 60 * 24));

console.log(daysDifference1);

//Calculate the difference in hours

console.log("Calculate the difference in hours");

const daysDifferenceHours = Math.floor(timeDiff / (1000 * 60 * 60));

console.log(daysDifferenceHours);

//Calculate the difference in hours

console.log("Calculate the difference in years");

const yearDiff = Date2.getFullYear() - Date1.getFullYear();

const daysDifferenceYear = Math.floor(yearDiff);

console.log(daysDifferenceYear);

//Calculate the diff in months

console.log("Calculate the difference in Months");

function calculateTotalMonthDifference(date1, date2) {
  // Parse the input dates
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Calculate the difference in years and months
  const yearDifference = d2.getFullYear() - d1.getFullYear();
  const monthDifference = d2.getMonth() - d1.getMonth();

  console.log("yearDifference :-", yearDifference);
  // Calculate the total difference in months
  const totalMonths = yearDifference * 12 + monthDifference;

  return totalMonths;
}

// Example usage: Replace '2020-08-15' and '2023-12-10' with your specific dates
const date1 = "2020-08-15";
const date2 = "2023-12-10";

const totalMonthDifference = calculateTotalMonthDifference(date1, date2);
console.log(
  `Total month difference between ${date1} and ${date2}: ${totalMonthDifference} months`
);

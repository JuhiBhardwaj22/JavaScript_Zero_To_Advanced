const arr = [1, 2, 330, 1, 111];

let max = arr[0];

arr.forEach((item) => {
  if (max < item) {
    max = item;
  }
});

console.log("val", max);

//Reverse string
const str = "Juhi";
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log("newStr", newStr);

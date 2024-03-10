// Declare an object faltten an object
let ob = {
  Company: "GeeksforGeeks",
  Address: "Noida",
  contact: +91 - 999999999,
  mentor: {
    HTML: "GFG",
    CSS: "GFG",
    JavaScript: "GFG",
    subject: {
      name: "React",
      msg: "Please read carefully",
    },
  },
  info: {
    infoHTML: "GFG",
    infoCSS: "GFG",
    infoJavaScript: "GFG",
    infosubject: {
      infoname: "React",
      infomsg: "Please read carefully",
    },
  },
};

const flattenObj = (ob) => {
  let result = {};
  for (const i in ob) {
    if (typeof ob[i] === "object") {
      const temp = flattenObj(ob[i]);
      for (let j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

console.log("using for in lop", flattenObj(ob));

//Amother approch

const flattenObjectUsingForEach = (ob, newObj, sep) => {
  Object.keys(ob).forEach((item) => {
    if (typeof ob[item] !== "object") {
      newObj[sep + item] = ob[item];
    } else {
      flattenObjectUsingForEach(ob[item], newObj, item + "-");
    }
  });
  return newObj;
};
//Intiall seprator we pass default ""
console.log("flatten Array ->", flattenObjectUsingForEach(ob, {}, ""));

const arr = [1, 2, [4, 5, [6, 8]], [11, 3, 43, 100, [1111, ["Juhi"]]]];

//using flat

console.log("Using flat", arr.flat(Infinity));

//Flatten array
const flattenArrayUsingForEach = (arr, newArray) => {
  for (let item of arr) {
    if (typeof item !== "object") {
      newArray.push(item);
    } else {
      flattenArrayUsingForEach(item, newArray);
    }
  }
  return newArray;
};
//origonal array
console.log(arr);
console.log("flatten Array ->", flattenArrayUsingForEach(arr, []));

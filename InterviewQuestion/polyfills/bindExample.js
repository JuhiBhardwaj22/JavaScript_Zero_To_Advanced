let userInfo = {
  name: "Juhi Bhardwaj",
  email: "Juhi@gmail.com",
};

//Bind method
let getUserinfo1 = function () {
  console.log("this ->", this);
  console.log("By using this", this.name);
};
let getMyName = getUserinfo1.bind(userInfo);
console.log("getMyName", getMyName);
getMyName();

//Polyfill Example for Bind menthod

let printName = function (state, age, id) {
  console.log(
    "Name :" +
      this.name +
      "  Email :" +
      this.email +
      "  State:" +
      state +
      "   age:" +
      age +
      " ID:" +
      id
  );
};
Function.prototype.myBind = function (...args) {
  let functionCb = this;
  console.log("args", args);
  let params = args.slice(1); //This willl remove first value of aaray and return all value
  return function (...agrs2) {
    //args2 when we call this function and pass argument
    //  [...params, ...args2] this will contcatenate all the value
    functionCb.apply(args[0], [...params, ...agrs2]);
  };
};

let getMyBindInfo = printName.myBind(userInfo, "Haryana", "23"); //myBind should work in the same way as bind method is working.

getMyBindInfo("23456");

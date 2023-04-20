const arr = ["Juhi", "Jha"];

const obj1 = {
  name: "Mahi",
  city: "Noida",
  getInfo: function () {
    console.log("Name :  " + this.name + "City : " + this.city);
  },
};

let obj2 = {
  name: "Juhi",
};

// by this way we can access the object
obj2.prototype = obj1;
obj2.prototype.getData = function () {
  console.log("Info -> By attaching protoype");
};
console.log("obj2", obj2);
console.log("obj1 ", obj1);
console.log("arr -> ", arr);

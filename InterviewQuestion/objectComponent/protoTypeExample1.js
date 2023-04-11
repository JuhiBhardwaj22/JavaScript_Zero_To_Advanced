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
obj2.__proto__ = obj1;
console.log("arr -> ", arr);

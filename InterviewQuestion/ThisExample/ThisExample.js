console.log("This Example");

//For this please check also file functionExample.js

console.log("Global Object ->", this); //Global Object

function x() {
  console.log("Inside this function", this); //Global Object
}
x();

function y() {
  setTimeout(function () {
    console.log("inside call back function", this); //Global Object
  });
}
y();

const myObject = {
  name: "Juhi",
  getInfo: function () {
    console.log("inside object method", this); //{name: 'Juhi', getInfo: ƒ}
  },
};
myObject.getInfo();

const myObject1 = {
  name: "Juhi",
  getInfo: function () {
    setTimeout(function () {
      console.log("inside object method and setTimeout", this); //Global Object
    });
  },
};
myObject1.getInfo();

const myObject3 = {
  name: "Juhi",
  getInfo: function (val) {
    console.log(val);
    console.log("inside object method but using calll", this);
  },
};
//myObject3.getInfo.call({ empInfo: "GlobalLogic" });//{empInfo: 'GlobalLogic'}

const info = {
  comID: 123,
  test: "01",
};
myObject3.getInfo.apply(info, ["GLOBALOGIC"]); //{comID: 123, test: '01'}

//This inside arrow function

function z() {
  setTimeout(() => {
    console.log("arrow function -------->", this); //GlobalObject
  });
}

z();

const Object1 = {
  name: "Juhi",
  getInfo: () => {
    setTimeout(() => {
      console.log("this inside arrow function object *************888", this); //Globallobject
    });
  },
};

Object1.getInfo();

const myObject4 = {
  value: 42,
  handleClick: function () {
    setTimeout(() => {
      console.log(this.value); // 'this' still refers to myObject
    }, 1000);
  },
};
myObject4.handleClick();

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }
  add(arr) {
    arr.forEach(function (elm) {
      this.sum = this.sum + elm;
      ++this.count;
      console.log("sum ->", this.sum);
    }, this);
  }
}

const obj = new Counter();
obj.add([2, 5, 9]);
console.log("obj", obj);

//Another Example
var myObject = { name: "Juhi" };

const arr = [4, 5];

arr.forEach(function (elm) {
  console.log("item ->", elm);
  console.log("myObject", this);
}, myObject);

//In Arrow thisArg  will not work

arr.forEach((elm) => {
  console.log("elm ->", elm);
  console.log("myObject", this); // it will act as window object
}, myObject);

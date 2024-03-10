console.log(sum(2)(1)(3)(2)(20)());

function sum(a) {
  return function (b) {
    if (b) return sum(a + b);
    return a;
  };
}

function sum(a) {
  return function (args) {
    return args ? sum(a + args) : a;
  };
}
console.log("curr ->", sum(2)(2)(2)(2)(2)(2)(2)(2)(2)());

//Traditional approach
const add = (x) => x + 2;
const mul = (x) => x * 2;
const sub = (x) => x - 1;

const addRes = add(2);
console.log("addRes", addRes);

const mulRes = mul(addRes);
console.log("mulRes", mulRes);

//compose function

function Compose(...funs) {
  return function (x) {
    return funs.reduceRight((y, f) => f(y), x);
  };
}

const Compose1 =
  (...funs) =>
  (x) =>
    funs.reduceRight((acc, curr) => curr(acc), x);

function Compose2(functions) {
  return function (x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      console.log("i", functions[i](x));
    }
  };
}

const finalCompose = Compose(sub, add, mul)(4);
console.log("finalCompose", finalCompose);

const finalComposeES6 = Compose1(sub, add, mul)(4);
console.log("finalComposeES6", finalComposeES6);

const finalComposeForLoop = Compose2([sub, add, mul])(4);
console.log("finalComposeForLoop", finalComposeForLoop);
//when we return promise
async function getData() {
  return Promise.resolve("Namste async function");
}

const p1 = getData();
console.log("p1", p1);

p1.then((res) => console.log("When Return promise->", res));

//if we return direct value

async function getData1() {
  return "return value directly";
}

const p2 = getData1();
console.log("p2", p2);

p2.then((res) => console.log("Return Data directly->", res));

//Before async and wait traditional approch

const promise = new Promise((resolve) => resolve("Traditional Approch"));

function getData3() {
  promise.then((res) => console.log(res));
}
getData3();

//now using async and Await
const promise1 = new Promise((resolve) =>
  resolve("modern Approch using async and await")
);
async function handlePromise() {
  const val = await promise1;
  console.log("val ->", val);
}
handlePromise();

//Diff between  normal promise and async and wait

const promise3 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Promise Resolved Value ");
  }, 10000)
);

function getData4() {
  promise3.then((res) => console.log(res));
  //here console.log willl excute first because js will wait for none in this case
  console.log(
    "-----------------------Hleoooooo Promise Approch---------------------------"
  );
}
getData4();

async function getData5() {
  console.log("Hello world");
  const val = await promise3;
  console.log(
    "----------------------Namste Javscript!!---------------------------------"
  );
  console.log(val);
}
getData5();

//
console.log(
  "*********************************************************************"
);

const p10 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Promise-1");
  }, 10000)
);
const p11 = new Promise((resolve) =>
  setTimeout(() => {
    resolve("Promise-2");
  }, 20000)
);

async function getInfo() {
  console.log("Multiple Promises");

  const val1 = await p10;
  console.log(val1);
  const val2 = await p11;
  console.log(val2);
}
getInfo();

//by this way we can handle error also
async function getFetchData() {
  try {
    const jsondata = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await jsondata.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
getFetchData();

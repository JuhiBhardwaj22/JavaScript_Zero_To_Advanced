const playList = [
  { songName: "Test1", duration: 1000 },
  { songName: "Test2", duration: 2000 },
  { songName: "Test3", duration: 3000 },
  { songName: "Test4", duration: 4000 },
  { songName: "Test5", duration: 5000 },
];

function displayList(list) {
  list.map((item) => {
    setTimeout(() => {
      if (item.duration) {
        console.log("Song Name :-", item.songName);
      }
    }, item.duration);
  });
}

displayList(playList);

//the setTimeout() function creates its own scope
//this will refer the Global Object
function greetsetTimeout() {
  let name = "Mahi";
  setTimeout(function () {
    console.log("mname own scope-- >", name);
    console.log("inside callback function ->", this.name);
  }, 500);
}
greetsetTimeout.call({ name: "Juhi" });

const p = new Promise((resolve,reject) => resolve(1));

console.log("P ->",p)
async function asyncReturn(){
  return p;
}
console.log("asyncReturn",asyncReturn())
function basicReurn(){
  return Promise.resolve(p);
}
console.log("basicReurn",basicReurn())
console.log(p === asyncReturn()); //false

//This will return true becoz both refernce the same memory
console.log(p === basicReurn()); //true


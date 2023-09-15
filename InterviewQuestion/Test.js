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


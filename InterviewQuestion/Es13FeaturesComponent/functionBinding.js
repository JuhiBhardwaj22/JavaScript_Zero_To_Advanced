//Function Binding------------------------------s

//When passing object methods as callbacks, for instance to setTimeout,
//there’s a known problem: "losing this".

let user = {
  firstName: "Juhi",
  sayHi: function () {
    console.log("FirstName", this.firstName);
  },
};

setTimeout(user.sayHi, 1000); //FirstName undefined

//That’s because setTimeout got the function user.sayHi, separately from the object.
// The last line can be rewritten as:
//that is the reason it will go only into sayHi funtion and
// then try to search firstName into global object
let f = user.sayHi;
setTimeout(f, 1000); // lost user context

//We can resolve this issue by two ways

//1.using function

setTimeout(function () {
  user.sayHi();
}, 500); //FirstName Juhi

setTimeout(() => user.sayHi(), 200); //FirstName Juhi

//2. using bind also we can do

let binObj = user.sayHi.bind(user);
binObj();

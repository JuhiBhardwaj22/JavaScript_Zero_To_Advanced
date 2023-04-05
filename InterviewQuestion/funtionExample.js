function getUserinfo({name,age}){
console.log("name",name)
console.log("age",age)
}

const obj = {
    name:"juhi",
    age:26
}
getUserinfo(obj)

//The syntax that we used before is called a Function Declaration:
function sayHi() {
    console.log( "This is Function Declaration" );
  }
  sayHi();

  //There is another syntax for creating a function that is called a Function Expression.
  let sayHello = function() {
    console.log( " Function Expression" );
  };
  console.log("print whole function",sayHello()) // output will be undefined
  console.log("print whole function",sayHello) // here it will print whole function 
  // By this way we can assign into new variable
  const text = sayHello;
  text();


  console.log("-----Arrow Funtion--------")

  let func = ({name,age,gender}) =>{
    console.log("User Info :-" , name ," ,",  age,", " ,gender)
  }
  const userData = {
    name:"juhi",
    age:26,
    gender:"female"
}
  func(userData)

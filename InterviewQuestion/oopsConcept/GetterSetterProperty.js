const user = {
  name: "Juhi",
  age: 30,

  get getName() {
    return "Ms" + this.name;
  },
  //also write condition here
  set setName(elm) {
    this.name = elm;
  },
};

console.log("Name: -", user.getName);
user.setName = "Mahi Jhas";
console.log("Name: -", user.getName);

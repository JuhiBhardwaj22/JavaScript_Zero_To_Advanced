const person = {
  name: "Juhi Bhardwaj",
};
Object.defineProperty(person, "name", { writable: true });
person.name = "Mahi";
console.log("Read Only when false ->", person);

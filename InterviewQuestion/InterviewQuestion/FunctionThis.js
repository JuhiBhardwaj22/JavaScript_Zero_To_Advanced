//1 Global Context:
function globalContextExample() {
  console.log(this === window); // In a browser, this will be true
}

globalContextExample(); // Outputs: true

//2 . Function as a Method:

//When a function is used as a method of an object, this refers to the object that the method is called on.
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Outputs: "Hello, my name is John"

//3. Explicitly Setting this with call or apply:

//You can explicitly set the value of this by using the call or apply methods when calling a function.
function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person1 = { name: "Alice" };

greet.call(person1); // Outputs: "Hello, my name is Alice"

//4.Constructor Functions:

//When a function is used as a constructor (with new), it creates a new object, and this refers to that new object.

function Person(name) {
  this.name = name;
}

const john = new Person("John");
console.log(john.name); // Outputs: "John"

//5. Event Handlers:

//In event handlers, this often refers to the element that triggered the event.

<script>
  document.getElementById("myButton").addEventListener("click", function(){" "}
  {
    console.log(this) // Refers to the button element
  }
  );
</script>;

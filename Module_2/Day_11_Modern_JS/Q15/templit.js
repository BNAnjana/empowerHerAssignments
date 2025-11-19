//Template Literals
const username = "Alice";
const course = "JavaScript";
let result = `Hello ${username}, welcome to the ${course} course!`;
console.log(result);

//Shorthand method
const Name = "Sam";
const age = 21;
const student = {
  Name,
  age,
  greet() {
    console.log("Hello");
  }
};

//getFullName function
let first = "John";
let last = "Greesham";
let getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName(first, last));
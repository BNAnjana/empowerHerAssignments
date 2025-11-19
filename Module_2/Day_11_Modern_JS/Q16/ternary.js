//Arrow functions & Ternary operator
//a.
let isEven = (n) => ((n %2 === 0) ? true : false);
console.log(isEven(24));

//b.
let marks = 70;
console.log((marks >= 35) ? "Pass" : "Fail");

//c.
const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Sam");
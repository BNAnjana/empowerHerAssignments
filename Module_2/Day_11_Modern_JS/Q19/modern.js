//1. Template Literals + Expressions
//a.
console.log(`${5+7}`);

//b.
const message = `Hello Alice!
Welcome to this course
Javascript`
console.log(message);

//c.
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName+" "+lastName}`);

//2. Arrow Functions & this
//a.
let square = (n) => {
  return n * n;
}
console.log(square(5));

//b.
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();
//Output is undefined
// Arrow functions don’t have their own this keyword.
// Instead, they use the this from where they were defined, not where they are called.
// In this case, test is defined inside obj, but the arrow function doesn’t use obj’s this.
// So this.value looks for value in the outer scope which doesn’t have it so it prints undefined.

//c.
const object = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
object.test();

//3. Rest, Spread & Copying Objects
//a.
const product = { name: "Pen", price: 10 };
let products = {...product};
console.log(products);

//b.
const c = { x: 1 };
const d = { y: 2 };
let merged = {...c, ...d};
console.log(merged);

//c.
function maxValue(...nums){
  nums = [3,5,2,8,4,9,15];
  let max=nums[0];
  for(let i=0; i<nums.length; i++){
  if(nums[i]>max){
    max = nums[i];
  }
}
console.log(max);
}
maxValue();

//4. Destructuring & Optional Chaining
//a.
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a); // 10
console.log(b); // 20
console.log(a,b);// 10 20

//b.
const laptop = { brand: "Dell", ram: "8GB" };
const {brand} = laptop;
console.log(brand);

//c.
const info = {};
console.log(info?.name);

//5. Scoping (let/var/const)
//a.
for (var i = 0; i < 3; i++) {}
console.log(i);
//Output is 3

//b.
for (let j = 0; j < 3; j++) {}
console.log(j);
//Output is - ReferenceError: j is not defined

//c.
//const is used for values that should not be reassigned because const makes a variable as a fixed value that means if a variable is declared using const then its value cannot be changed.

//6. Ternary Operator
//a.
let kmph = 65;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

//b.
let age=19;
console.log(age>=18 ? "Adult" : "Minor");

//c.
let number = 5;
let result = number > 0 ? "Positive" : (number < 0 ? "Negative" : "Zero");
console.log(result);

//7. Spread, Rest & Arrays
//a.
const nums = [1,2,3];
let newnums = [...nums,4,5];
console.log(newnums);

//b.
let A = ["x","y"];
let B = ["z"];
let combined = [...A, ...B];
console.log(combined);

//c.
function printNames(...names){
  return names;
}
console.log(printNames("A","B","C"));

//8. Object Destructuring & Shorthand
//a.
const user = { id: 101, status: "active" };
const {id,status} = user;
console.log(id);
console.log(status);

//b.
const Id = 101;
const role = "admin";
const User = {Id, role};

//c.
const name = "Ram";
const rollno = 101;
const student = {
  name,
  rollno,
  greet() {
    return `Hello, I am a ${this.name} with rollno. ${this.rollno}`;
  }
};
console.log(student.greet());

//9. Template Literals
//a.
const today = new Date().toDateString();
console.log(`Today's date is: ${today}`);

//b.
let NAME = "Tanuj";
let SCORE = 90;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

//10. Arrow Function Shorthands
//a.
let add = (a,b) => a+b;
console.log(add(3,4));

//b.
let isAdult = (Age) => {
  if(Age>18)
  return true;
  else
  false;
}
console.log(isAdult(19));

//c.
let double = (Num) => Num*2;
console.log(double(4));

//11. Spread Operator (Arrays & Objects)
//a.
const original = [1,2,3,4,5];
const cloned = [...original];
console.log(cloned);

//b.
const abc = [23,45,67,89,99];
let xyz = [100,...abc];
console.log(xyz);

//c.
const obj1 = {
  name: "Anya",
  age: 15,
  city: "Tokyo"
};

const obj2 = {
  age: 20,
  country: "Japan"
};
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//12. Optional Chaining
//a.
const USER = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(USER?.address?.city);

//b.
const person = {
  name: "Ajay",
  job: {
    type: "Private"
  }
};
console.log(person?.job?.title);

//c.
//Optional Chaining allows us to safely access nested properties in objects whether they exist or not. It prevents runtime error when we try to access a property which is null or undefined.
//example
const userProfile = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "New York"
  }
};
// Using optional chaining to prevent a runtime error
console.log(userProfile?.address?.city);  // Output: "New York"
console.log(userProfile?.contact?.phone); // Output: undefined (no error)

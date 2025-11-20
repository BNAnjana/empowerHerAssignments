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

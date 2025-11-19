//Scoping & Optional Chaining
//a.
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

//The output for this code is:
//20
//ReferenceError: x is not defined.
//Because var has global scope. y is declared inside the if block but because var ignores block scope, it will available outside the block.
//So, console.log(y) gives 20.
//let has block scope. x exists only inside the { } block of the if statement. Outside the block, x is not defined.
//So console.log(x) gives reference error.

//b.
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile?.user?.details?.email);
console.log(profile?.user?.details?.phone); //output is undefined. It does not throw any error

//c.
const product = {
  info: {
    name: "Acer Laptop"
  }
};

console.log(product?.info?.specs?.weight);
// Output: undefined
//It does not throw any runtime error
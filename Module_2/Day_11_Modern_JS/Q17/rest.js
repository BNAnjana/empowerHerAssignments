//Spread, Rest & Destructuring
//a.
arr1 = [1, 2, 3];
arr2 = [4, 5];
let result = [...arr1,...arr2];
console.log(result);

//b.
function sum(...nums){
  let total = 0;
  for(let n of nums){
  total += n;
  }
  console.log(total);
}
sum(5,10,15);

//c.
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

console.log(`name: ${user.name}
city: ${user.address.city} 
pin: ${user.address.pin}`);
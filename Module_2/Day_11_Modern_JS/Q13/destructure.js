//Multi-level destructuring
const people = [
    {
        name : "Alice",
        address : {
            city : "New York",
            street :{
                name : "Broadway",
                number : 123
            }
        }
    },
    {
        name : "Bob",
        address : {
            city : "Los Angeles",
            street : {
                name : "Sunset Boulevard",
                number : 456
            }
        }
    }
];

const [
    {name: name1, address: {city: city1, street: {name: street1 }}}, {name: name2, address: {city: city2, street: {name: street2 }}}
] = people;

const result = [`${name1} lives in ${city1} on ${street1}`, `${name2} lives in ${city2} on ${street2}`];
console.log(result);
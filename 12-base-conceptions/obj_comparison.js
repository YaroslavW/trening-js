const joe1 = { name: "Joe" };
const joe2 = { name: "Joe" };
const joe3 = joe1;

console.log(joe1 === joe2); // false
console.log(joe1 === joe3); // true

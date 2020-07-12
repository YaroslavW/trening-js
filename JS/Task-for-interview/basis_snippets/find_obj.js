let customers = [
  { id: 0, name: "paul" },
  { id: 1, name: "jeff" },
  { id: 2, name: "mary" },
];
let customer = customers.find((el) => el.name === "jeff");

console.log(customer);
// { id: 1, name: 'jeff' }

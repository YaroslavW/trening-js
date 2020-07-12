const customer = {
  name: "John",
  age: 23,
  car: "BMW",
  sex: "man",
  status: "worker",
};

Object.keys(customer).forEach((key, val) => {
  // here we can do something
  console.log(`object customer has property - ${key} with value = ${val}`);
});

// object customer has property - name with value = 0
// object customer has property - age with value = 1
// object customer has property - car with value = 2
// object customer has property - sex with value = 3
// object customer has property - status with value = 4

for (prop in customer) {
  console.log(
    `object customer has property - ${prop} with value = ${customer[prop]}`
  );
}
// object customer has property - name with value = John
// object customer has property - age with value = 23
// object customer has property - car with value = BMW
// object customer has property - sex with value = man
// object customer has property - status with value = worker
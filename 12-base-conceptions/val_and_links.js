let variable1 = "My string";
let variable2 = variable1;

variable2 = 'My new string';
console.log(variable1); // My string
console.log(variable2); // My new string

// ===== >>> With Objects
let variable_1 = { name: "Jim" };
let variable_2 = variable_1;

variable_2.name = 'John';
console.log(variable_1); // { name: 'John' }
console.log(variable_2); // { name: 'John' }
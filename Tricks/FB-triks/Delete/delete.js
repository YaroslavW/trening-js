const abverb = "Just";
name = "Java Script";

const abverb_result = delete abverb;
const name_result = delete name;

console.log(abverb_result);
// false
console.log(name_result);
//  true

// Output:
// false - because the delete statement ONLY affects the properties of the object.
// true - because creates an name property in a global object

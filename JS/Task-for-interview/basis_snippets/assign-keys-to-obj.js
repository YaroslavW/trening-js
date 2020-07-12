let name = "bob";
let age = 34;
let job = "carpenter";
// instead of this
let myObject1 = { name: name, age: age, job: job };
// do this
let myObject2 = { name, age, job };
console.log(myObject2);
//  { name: 'bob', age: 34, job: 'carpenter' }

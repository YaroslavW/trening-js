const t = [2, 4, 3, 1];
const t1 = [4, 2, 3, 1];
console.log(t === t1);
console.log(t.sort() === t1.sort());
// false;
// false;

var object = { 'a': 1 };
var other = { 'a': 1 };
 
_.isEqual(object, other);
// => true
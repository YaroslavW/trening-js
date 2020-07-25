var _ = require("lodash");

var object = { a: 1 };
var other = { a: 1 };

var comp = _.isEqual(object, other);
console.log(comp);
// true

const t = [2, 4, 3, 1];
const t1 = [4, 2, 3, 1];

const equal = _.isEqual(t, t1);
console.log(`array-t and array t1 is equal ? = ${equal}`);
// array-t and array t1 is equal ? = false

const p = [2, 4, 3, 1].sort();
const p1 = [4, 2, 3, 1].sort();

const equal1 = _.isEqual(p, p1);
console.log(`array-t and array t1 is equal ? = ${equal1}`);
// array-t and array t1 is equal ? = true

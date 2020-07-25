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

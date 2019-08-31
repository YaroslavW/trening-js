const array = [1, 1, 2, 3, 5, 5, 1];
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);
// [ 1, 2, 3, 5 ]
// This trick works for arrays containing primitive types: undefined, null, boolean,
//  string and number . (If you had an array containing objects, functions or additional
//  arrays, you’d need a different approach!)

tem = {};
[1, 2, 3, 2, 3, 1, 5].forEach(e => (tem[e] = e));
var newArray = Object.values(tem);
console.log("New" + newArray);

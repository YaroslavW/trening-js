const myArray = [2, 3, [4, 5], 6, [7, 7, [8, 9, [1, 1]]]];
console.log(myArray.flat());
// [ 2, 3, 4, 5, 6, 7, 7, [ 8, 9, [ 1, 1 ] ] ]
console.log(myArray.flat(1));
// [ 2, 3, 4, 5, 6, 7, 7, [ 8, 9, [ 1, 1 ] ] ]
console.log(myArray.flat(2));
// [ 2, 3, 4, 5, 6, 7, 7, 8, 9, [ 1, 1 ] ]
console.log(myArray.flat(Infinity));
// [2, 3, 4, 5, 6, 7, 7, 8, 9, 1, 1];

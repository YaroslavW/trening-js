// ====================>>>>>>>>>>>>>>>>>>>>> SHALLOW
let nestedArray = [1, [2], 3];
let arrayCopy = [...nestedArray]; 

// Make some changes
arrayCopy[0] = '100'; // change shallow element
arrayCopy[1][0] = '999'; // change nested element
console.log(arrayCopy); // [ '100', [ '999' ], 3 ]

// ❌ Nested array got affected
console.log(nestedArray); // [ 1, [ '999' ], 3 ]

// ====================>>>>>>>>>>>>>>>>>>>>> DEEP
let nestedArray = [1, [2], 3];
let arrayCopy = JSON.parse(JSON.stringify(nestedArray)); 

// Make some changes
arrayCopy[0] = '100'; // change shallow element
arrayCopy[1][0] = '999'; // change nested element
console.log(arrayCopy); // [ '100', [ '999' ], 3 ]

// ✅ Nested array NOT affected
console.log(nestedArray); //  1, [ 2 ], 3 ]
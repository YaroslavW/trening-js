let array = [1,2,3];
let arrayCopy = [...array]; // create TRUE copy

console.log(arrayCopy); // [1,2,3];

// Change 1st element of the array
arrayCopy[0] = '100';
console.log(arrayCopy); // [ '100', 2, 3 ]

// ✅ Original NOT affected 
console.log(array); // [ 1, 2, 3 ]
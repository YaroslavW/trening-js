const largest = Math.max(5, 7, 3, 4);
console.log(largest); // 7


// const numbers = [5, 7, 3];
// Math.max(numbers[0], numbers[1], numbers[2]);
// //  And this won't work
// console.log(Math.max(numbers)); // NaN



// const numbers = [5, 7, 3];
// //  Much Better!
// console.log(Math.max(...numbers));


const numbers = [5, 7, 3];
console.log(...numbers); // 5 7 3
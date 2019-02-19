// const one = [1,2,3];
// const two = [4,5,6];
// const merged = [...one, ...two];
// console.log(merged);
// [ 1, 2, 3, 4, 5, 6 ]

// const one = [1,2,3];
// const two = [4,5,6];
// console.log(Math.max(...one, ...two)); // 6


// const one = [1,2,3];
// const two = [4,5,6];
// const three = [2,100,2];
// console.log(Math.max(...one, ...two, ...three)); // 100

// ==>>>> A variadic function is a function that accepts an infinite or variable number of arguments

const three = [2,200,2];
console.log(Math.max(1, 2, ...three)); //200
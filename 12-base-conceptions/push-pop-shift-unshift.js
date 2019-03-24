// ====>>> push
let arr = [1, 2, 3, 4];
const length = arr.push(5);

console.log(arr);
// [1, 2, 3, 4, 5]
console.log(length);
// 5


// ==== >>> pop
let arr_1 = [1, 2, 3, 4];
const popped = arr_1.pop();

console.log(arr_1);
// [1, 2, 3]
console.log(popped);
// 4

// ===>> shift
let arr_2 = [1, 2, 3, 4];
const shifted = arr_2.shift();

console.log(arr_2);
// [2, 3, 4]
console.log(shifted);
// 1


// ===>>> unshift
let arr_3 = [1, 2, 3, 4];
const unshifted = arr_3.unshift(5, 6, 7);

console.log(arr_3);
// [5, 6, 7, 1, 2, 3, 4]
console.log(unshifted);
// 7


// эти четыре метода изменяют исходный массив на месте;
// pop иshift возвращают удаленные элементы;
// push и unshift возвращают новую длину массива;
// методы shift и unshift, работающие с началом массива, более трудозатратны, так как им приходится сдвигать индексы всех элементов.
let arr1 = [3, 5, 7];
arr2 = [5, 4, 2];

const a = arr1.filter((num) => arr2.includes(num));
console.log(a);
// [5];
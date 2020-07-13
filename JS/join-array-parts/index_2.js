let array1 = [1, 3, 4, 6, 5];
let array2 = [3, 1, 7, 0, 2];

const answer = array1
  .filter((i) => !array2.includes(i))
  .concat(array2.filter((i) => !array1.includes(i)));

console.log(answer);
// [ 4, 6, 5, 7, 0, 2 ]
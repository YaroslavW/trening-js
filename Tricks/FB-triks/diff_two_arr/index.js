const arr_1 = [5, 2, 1, 8];
const arr_2 = [1, 2, 3, 4, 5];

const diff_arr = [
  ...arr_2.filter(x => !arr_1.includes(x)),
  ...arr_1.filter(x => !arr_2.includes(x))
];

console.log(diff_arr);

// [3, 4, 8]; unicum num;
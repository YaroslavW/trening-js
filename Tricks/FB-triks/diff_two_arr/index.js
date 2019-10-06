const arr_1 = [5, 2, 1, 8];
const arr_2 = [1, 2, 3, 4, 5];

// const diff_arr = [
//   ...arr_2.filter(x => !arr_1.includes(x)),
//   ...arr_1.filter(x => !arr_2.includes(x))
// ];

// console.log(diff_arr);

// [3, 4, 8]; unicum num;

// As functiom
function arr_diff(a, b) {
  return [
    ...a.filter(x => b.indexOf(x) === -1),
    ...b.filter(x => a.indexOf(x) === -1)
  ];
}

console.log(arr_diff(arr_1, arr_2));
// [ 8, 3, 4 ]

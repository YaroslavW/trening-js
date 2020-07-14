function multArr(arr, n) {
  let res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return console.log(res);
}

const arr_1 = ["name", "John", "age", 23, "phone", "+3800991234323"];

multArr(arr_1, 2);
// [ [ 'name', 'John' ], [ 'age', 23 ], [ 'phone', '+3800991234323' ] ]

const arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
multArr(arr_2, 5);
// [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
// ];
multArr(arr_2, 3);
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12],
//   [13, 14, 15],
// ];

multArr(arr_2, 4);
// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11, 12 ], [ 13, 14, 15 ] ]
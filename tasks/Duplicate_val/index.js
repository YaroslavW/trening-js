let arr_1 = ["a", "b", "c", "c", "a", "d", "c"];
// ['a', 'c', 'c']
let arr_2 = ["ac", "ab", "aaa"];
// []
let arr_3 = [1, 2, 3, 2, 2, 4, 5, 5];
// [2, 2, 5]

function findDuplicate(arr) {
  var temp = {};
  temp = arr.filter((a) => {
    return temp[a] || !(temp[a] = !0);
  });
  console.log(temp);
}

findDuplicate(arr_1);
// [ 'c', 'a', 'c' ]

findDuplicate(arr_2);
// []
findDuplicate(arr_3);
// [ 2, 2, 5 ]
// ===================>>> other <<<========
// var arr = [1, 2, 3, 2, 1],
//   temp = {};
// temp = arr.filter(function (a) {
//   return temp[a] || !(temp[a] = !0);
// });
// alert(temp);

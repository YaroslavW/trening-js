// get rid of duplicates
const unique_arr = arr => [...new Set(arr)];
const arr_1 = [1, 1, 2, 3, 2, 4, 2, 4, 3, 5, 3, 1, 3];

const arr1 = unique_arr(arr_1);
console.log(arr1);
// [ 1, 2, 3, 4, 5 ]

const arr_2 = ["C#", "JS", "js", "c#", "C#", "#JS", "C#", "#js"];
const arr2 = unique_arr(arr_2);
console.log(arr2);
// [ 'C#', 'JS', 'js', 'c#', '#JS', '#js' ]
// NOTE: Be careful strings are case-sensitive..

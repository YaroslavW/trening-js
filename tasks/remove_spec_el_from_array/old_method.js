var item = 4;
var newArr = [];
var arr = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr.length; i++) {
  if (item !== arr[i]) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
// [ 1, 2, 3, 5, 6 ]

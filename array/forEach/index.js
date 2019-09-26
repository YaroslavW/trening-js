const arr = [1, 3, 5, 7, 12];

const arr_1 = [];

arr.forEach(function(item) {
  return arr_1.push(item * 20);
});
console.log(arr_1);

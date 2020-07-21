//выбираем из массива нечетные номера
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function odd() {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      delete array[i];
    }
  }
  //   console.log(array);
}
odd(array);

const odd_1 = [];
array.map((val) => (val % 2 !== 0 ? odd_1.push(val) : false));
console.log(odd_1);
// [ 1, 3, 5, 7, 9 ]


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


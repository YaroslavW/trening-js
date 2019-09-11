// Напишите функцию с именем fizzbuzz, которая принимает два 2 массива и возвращает Fizz,
//  если объединенный
// длина списков делится на 3, Buzz, если он делится на 5, fizzbuzz, если это
// делится на 5 и 3

function fizzbuzz(arr_1, arr_2) {
  let com_arr = [...arr_1, ...arr_2];

  let Fizz = [];
  let Buzz = [];
  let fizzbuzz = [];
  if (com_arr.length % 3 === 0) {
    Fizz = [...com_arr];
    console.log(`Fizz = ${Fizz}`);
    if (com_arr.length % 5 === 0) {
      Buzz = [...com_arr];
      console.log(`Buzz = ${Buzz}`);
    }
  } else {
    fizzbuzz = [...com_arr];
    console.log(`fizzbuzz = ${fizzbuzz}`);
  }
}

fizzbuzz([1, 2], [5]);

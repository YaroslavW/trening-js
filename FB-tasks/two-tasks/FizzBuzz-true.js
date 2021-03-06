// Требуется написать функцию, выводящую в консоль числа от 1 до n,
//  где n — это целое число, которая функция принимает в качестве параметра,
// с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

const fizzbuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
// fizzbuzz(15);
// 1;
// 2;
// fizz;
// 4;
// buzz;
// fizz;
// 7;
// 8;
// fizz;
// buzz;
// 11;
// fizz;
// 13;
// 14;
// fizzbuzz;

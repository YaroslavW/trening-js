for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 3000);
}
// 3;
// 3;
// 3;

// =============================>>> Explanation <<<================
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Index: 4, element: undefined
// Причина подобного заключается в том, что функция setTimeout создаёт функцию (замыкание), у которой есть доступ к внешней по отношению к ней области видимости, представленной в данном случае циклом, в котором объявляется и используется переменная i. После того, как пройдут 3 секунды, функция выполняется и выводит значение i, которое, после окончания работы цикла, остаётся доступным и равняется 4-м. Переменная, в ходе работы цикла, последовательно принимает значения 0, 1, 2, 3, 4, причём, последнее значение оказывается сохранённым в ней и после выхода из цикла. В массиве имеется четыре элемента, с индексами от 0 до 3, поэтому, попытавшись обратиться к arr[4], мы и получаем undefined. Как избавиться от undefined и сделать так, чтобы код выводил то, чего от него и ждут, то есть — значения элементов массива?
// https://habr.com/ru/company/ruvds/blog/340194/

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 200);
}
// 0;
// 1;
// 2;

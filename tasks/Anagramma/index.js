const str_1 = "С Новым Годом";

const arr_1 = str_1
  .toLocaleLowerCase() // нижний регистр
  .replace(/\s/g, "") //убрать пробелы внутри
  .split(""); //в массив

console.log(arr_1);

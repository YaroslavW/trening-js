// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

var str = "Каждый охотник желает знать";
function stringToarray(str) {
  return str.trim().split(" ");
}

var arr = stringToarray(str);

console.log(arr); // ['Каждый', 'охотник', 'желает', 'знать']

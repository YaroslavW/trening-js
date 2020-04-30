// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

var str = "каждый охотник желает знать";

function capitalize(str) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}

console.log(capitalize(str)); // "Каждый Охотник Желает Знать"

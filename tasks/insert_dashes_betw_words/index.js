// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

var str = "HTML JavaScript PHP";

function insert_dash(str) {
  return str
    .trim()
    .toUpperCase()
    .replace(/[^a-zA-Z0-9 -]/, "")
    .replace(/\s/g, "-");
}

console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

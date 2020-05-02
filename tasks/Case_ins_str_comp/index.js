// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

function comparison(str1, str2) {
  var res = str1.toUpperCase() === str2.toUpperCase();

  return res;
}

console.log(comparison("string", "StRiNg")); // true
console.log(comparison("ABCDe", "AbcdW")); // false

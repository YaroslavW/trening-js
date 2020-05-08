// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
  if (substring.length > this.length) return false;
  return this.substr(this.length - substring.length) === substring;
};

console.log(str.endsWith(str1)); // false
console.log(str.endsWith(str2)); // true

// Создайте метод объекта String startsWith(), который определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

var str = "abc def ghi jkl mno pqr stu";
String.prototype.startsWith = function (start) {
  str = String(str);
  let regex = new RegExp("^" + start, "g"),
    res = regex.test(str);
  return res;
};

console.log(str.startsWith("abc")); // true

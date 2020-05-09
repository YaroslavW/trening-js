// Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.

function cutString(str, n) {
  var res = [];
  for (var i = 0; i < str.length; i += n) {
    res.push(str.substr(i, n));
  }
  return res;
}

console.log(cutString("наслаждение", 3)); // [нас,лаж,ден,ие]

// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

var str = "abc def ghi jkl mno pqr stu";

function findWord(word, str) {
  return RegExp("\\b" + word + "\\b").test(str);
}

console.log(findWord("mno", str)); // true

// Напишите функцию removeDuplicate(str), которая возвращает строку, очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

var str = "вишня, груша, слива, груша";

function removeDuplicate(str) {
  str = str.split(",");
  var result = [];
  for (var i = 0; i < str.length; i++) {
    if (result.indexOf(str[i]) == -1) result.push(str[i]);
  }
  return (result = result.join(", "));
}

console.log (removeDuplicate(str)); // вишня, груша, слива
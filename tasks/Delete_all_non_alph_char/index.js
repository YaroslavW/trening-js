// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function remove_char(str) {
  var res = "";
  res = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return res;
}

console.log(remove_char(str)); // "every hunter wishes to know"

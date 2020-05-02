// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

function insensitive_search(str1, str2) {
  let search_str = new RegExp(str2, "ig");
  var result = str1.search(search_str);

  return result > 0 ? "Соответствует" : "Не соответствует";
}

console.log(insensitive_search("Изучаю JavaScript", "javascript"));
// Соответствует
console.log(insensitive_search("Изучаю JavaScript", "javascriptS"));
// Не соответствует

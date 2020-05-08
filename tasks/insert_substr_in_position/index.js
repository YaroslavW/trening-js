// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указханную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

function insert(str, substr, pos) {
  var array = str.split("");
  array.splice(pos, 0, substr);
  return array.join("");
}

console.log(insert("Казнить нельзя")); // Казнить нельзя
console.log(insert("Казнить нельзя", "Помиловать ")); // Помиловать Казнить нельзя
console.log(insert("Казнить нельзя", "Помиловать ", 8)); // Казнить Помиловать нельзя

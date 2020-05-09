// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

function limitStr(str, n, symb) {
  if (!n && !symb) return str;
  symb = symb || "...";
  return str.substr(0, n - symb.length) + symb;
}

console.log(limitStr("Каждый охотник желает знать.")); // Каждый охотник желает знать.
console.log(limitStr("Каждый охотник желает знать.", 17)); // Каждый охотник...
console.log(limitStr("Каждый охотник желает знать.", 22, "!")); // Каждый охотник желает!

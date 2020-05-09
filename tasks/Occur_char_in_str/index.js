// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

var symb = "о",
  str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
  for (
    var count = -1, index = 0;
    index != -1;
    count++, index = str.indexOf(symb, index + 1)
  );

  return count;
}

console.log(count(str, symb)); // 5

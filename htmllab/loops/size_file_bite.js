// (*) В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты) и 1килобайт равен 1024 байта, найти количество байт в size.

var size = 120;
var unit = "Кб";

function getBite(size, unit) {
  switch (unit) {
    case "Кб":
      console.log(1024 * size);
      break;
    case "Mб":
      console.log(1024 * 1024 * size);
      break;
    case "Гб":
      console.log(1024 * 1024 * 1024 * size);
      break;
    default:
      console.log("Sorry, try again...");
  }
}

getBite(120, "Кб");
// 122880
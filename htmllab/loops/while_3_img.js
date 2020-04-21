// Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)

function getImg() {
  var n = 1;
  var img ='';
  var img_src =
    '<img src="https://dictionary.cambridge.org/ru/images/thumb/sea_noun_002_32588.jpg?version=5.0.81" alt="see" />';
  while (n <= 10) {
    img += img_src;
    n++;
  }
  return img;
}
// getImg();

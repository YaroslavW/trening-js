// Напишите функцию convChar(str), которая преобразовывает специальные символы для их отображения в HTML-коде следующим образом:

// & (амперсанд) – &amp;
// " (двойная кавычка) – &quot;
// ' (одинарная кавычка) – &#039;
// < (меньше) – &lt;
// > (больше) – &gt;

function convChar(str) {
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#039;");
  return str;
}

console.log(convChar('<body><div>"start"')); // <body><div>"start"
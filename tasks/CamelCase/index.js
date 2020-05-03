// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

str = "hEllo woRld";
function initCap(str) {
   return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m) {
      return m.toUpperCase().replace(/\s+/g, "");
   });
};

console.log(initCap(str)); // HelloWorld
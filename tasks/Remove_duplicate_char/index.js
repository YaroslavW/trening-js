// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

function unique_letters(str) {
  var str = str.split('');
  var res = str.filter(function(val, i, str) {
  return str.lastIndexOf(val) === str.indexOf(val);
      
  });
  return res;
}

console.log (unique_letters('anaconda')); // c,o,d
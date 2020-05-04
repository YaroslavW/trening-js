// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

function initSnake(str) {
  
  // Заменяем все заглавные буквы символом подчеркивания (_), а затем строчными буквами
  var str = str.replace(/[A-Z]/g, function (letter) {
    return '_' + letter.toLowerCase();
  });
  // Удаляем символ подчеркивания (_) в начале строки
  return str.replace(/^_/, "");
}

console.log(initSnake('HelloWorld')); // hello_world
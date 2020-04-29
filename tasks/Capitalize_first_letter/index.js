// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

var str = "string not starting with capital";

function cursive_letter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);

  // Ваш код
}

console.log(cursive_letter(str)); // "String not starting with capital"

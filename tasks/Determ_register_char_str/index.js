// Напишите функцию isUpperCase(str, character), которая определяет в каком регистре написан символ строки в указанной позиции. Если в верхнем регистре выводится – true, если в нижнем – false.

function isUpperCase(str, index) {
  return str.charAt(index).toUpperCase() === str.charAt(index);
}

console.log(isUpperCase("tasks JavaScript", 6)); // true

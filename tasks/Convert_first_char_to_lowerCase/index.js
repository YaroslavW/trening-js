// Напишите функцию capitalizeFirstLetter(str), которая преобразоввывает первый символ строки в нижний регистр.

var str="Пример строки";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(capitalizeFirstLetter(str)); // пример строки
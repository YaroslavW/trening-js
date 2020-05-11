// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

var str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
    return str.split(" ").splice(0, n).join(" ");
}

console.log(cutString(str, 5)) // 'Сила тяжести приложена к центру'
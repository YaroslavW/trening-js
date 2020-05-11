// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

var str = "    Max is a good      boy     ";

function strip(str) {
 str.replace(/\s+/g,' ' ) // заменить длинные пробелы одним
    .replace(/^\s/,'')    // удалить пробелы в начале строки
    .replace(/\s$/,'');   // удалить пробелы в конце строки

     return str;
}

console.log(strip(str)) // 'Max is a good boy'
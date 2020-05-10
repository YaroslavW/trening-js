// Напишите функцию cutTegs(str), которая возвращает строку str, очищенную от всех HTML-тегов.

var str = '<div id="tera">Здесь важная <a href="link">информация</a></div> о тегах HTML.'  

function cutTegs(str) {
 var regex = /( |<([^>]+)>)/ig,
     result = str.replace(regex, "");

     return result;
}

console.log(cutTegs(str)) // 'Здесь важная информация о тегах HTML.'
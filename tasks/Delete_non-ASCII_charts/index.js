// Напишите функцию remove_no_printed(str), которая удаляет из строки все символы, которые не относятся к печатаемым символам ASCII

var str="JAVA谷新道ひばヶ丘２丁���ひばりヶ���東久留米市SCRIPT";

function remove_no_printed(str) {  
  return str.replace(/[^\x20-\x7E]/g, '');
}

console.log(remove_no_printed(str)); // JAVASCRIPT
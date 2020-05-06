// Напишите функцию path(pathname), которая вовращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

var pathname = "/home/user/dir/file.txt";

function path(pathname) {
  var name = pathname.split("/").pop();
  return name;
}

console.log(path(pathname)); // file.txt
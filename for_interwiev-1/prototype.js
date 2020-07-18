/*  Изменение прототипа */
// Добавление свойства по умолчанию  к  встроенному объекту
String.prototype.color = "black";
// Добавление  (изменение) метода  к встроенному объекту
String.prototype.write = stringWrite;
function stringWrite() {
  document.write('<span style="color:' + this.color + '">');
  document.write(this.toString());
  document.write("</span>");
}
// используем измененный класс
var s = new String("Это строка");
s.color = "red";
s.write();

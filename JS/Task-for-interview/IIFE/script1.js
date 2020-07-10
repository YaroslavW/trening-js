// Пример: Создать основной рабочий файл (index.html) и подключить к нему два файла со скриптами (script1.js и script2.js).
// 1. В первом файле со скриптом создать замкнутую функцию, выводящую в консоль фразу ‘Привет, Иван‘. Для этого:

// Создать пустой объект IvanGreeter.
// Добавить к объекту свойство name со значением ‘Иван‘.
// Добавить к объекту метод sayHello, выводящий в консоль сообщение ‘Привет, Иван‘.


(function (window) {
  // замкнутая функция
  var IvanGreeter = {}; // создание пустого объекта
  IvanGreeter.name = "Иван"; // свойство
  var greeting = "Привет, ";
  IvanGreeter.sayHello = function () {
    // метод
    console.log(greeting + " " + IvanGreeter.name);
  };
  window.IvanGreeter = IvanGreeter;
})(window);
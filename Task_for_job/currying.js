// Реализуйте каррирование (англ. currying).

// Прежде всего, что такое каррирование в JavaScript ? Это приём в функциональном программировании, позволяющий преобразовать функцию, заменив её несколько первых аргументов константными значениями, тем самым создав новую функцию с меньшим количеством аргументов на основе старой.Помогает писать более чистый и элегантный код.

// Пример использования:
// function addBase(base) {
//   return function (num) {
//     return base + num;
//   }
// }

// var addTen = addBase(10);
// addTen(5); //15
// addTen(80); //90
// addTen(-5); //5

// Реализация поставленной задачи:

// Вы можете применить каррирование к прототипу функции.Если нет аргументов для каррирования, вы просто возвращаете текущую функцию.Если есть аргументы, то переходите к следующим шагам:

// Объедините старые аргументы с новыми, используя args.concat(toArray(arguments))
// Передайте все аргументы в функцию, используя apply

// Function.prototype.curry = function () {
//   if (arguments.length < 1) {
//     return this; //nothing to curry. return function
//   }
//   var self = this;
//   var args = toArray(arguments);
//   return function () {
//     return self.apply(this, args.concat(toArray(arguments)));
//   }
// }

// function toArray(args) {
//   return Array.prototype.slice.call(args);
// }

// Использование:
// Передайте аргументы в метод function.curry.Возвратится функция.Используйте её для дальнейшего каррирования.

// function converter = function(factor, symbol, input) {
//   return input * factor + symbol;
// }

// var milesToKm = converter.curry(1.62, 'km');
// mileToKm(3); //result here

// var kgToLb = converter.curry(2.2, 'lb');
// kgToLb(3); //result here




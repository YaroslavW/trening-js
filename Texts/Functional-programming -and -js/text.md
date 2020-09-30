# **ЗАЧЕМ ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ В JAVASCRIPT? РЕЦЕПТЫ ДОСТИЖЕНИЯ ДАННОЙ ПАРАДИГМЫ ПРОГРАММИРОВАНИЯ**

![Logo](img/logo.jpeg)

Как **разработчик Javascript**, мы много раз слышали о парадигме функционального программирования или подходе к функциональному программированию. Итак, я знаю, что у вас в голове возникает много вопросов, почему именно так функционально? Почему не объектно-ориентированный подход или императивный стиль (пошаговый код без функции)?

Итак, начнем! Когда мы говорим о функциональном программировании, это означает, что вы должны мыслить более функционально. Простое определение функции состоит в том, что она принимает ввод и возвращает вывод. Не более того.

Давайте посмотрим на два кода, императивный и функциональный, и вы увидите разницу.

```js
///That's an Imperitive Style
var name = "Uzair";
var greet = "Welcome!";
console.log(greet + name); //// Welcome! Uzair
```

С другой стороны, теперь то же самое мы сделаем в функциональном стиле.

```js
//Functional Way
function greet(name) {
  console.log("Welcome! " + name);
}
greet("Uzair"); /// Welcome! Uzair
```

Вы заметили разницу, что лучше и чище?

## **Чистые функции - Pure Functions**

Другая идея парадигмы функционального программирования - писать чистые функции вместо некоторых управляющих функций, которые выведут вас из функционального контекста.

Чистая функция - еще одна более важная концепция для написания более чистого кода. В основном идея состоит в том, что вы хотите, чтобы ваша функция принимала входные данные и использовала только эту функцию для выполнения любых вычислений и возврата выходных данных, не нужно использовать какие-либо другие переменные вне этой функции или нет необходимости изменять значение этой функции.

Посмотрим на примеры

```js
///BAD Practice
var name = "Uzair";
function greet () {
   return "Welcome! "+ name;      /////NON PURE FUNCTION because using global variable.
}
////OR
function add (num1, num2) {
   num1 += 1;
   return num3 + num2;       /////NON PURE FUNCTION because manipulating the original value;
```

Это некоторые плохие практики написания функционального программирования, эти функции должны быть чистыми.

```js
///Good Practice
function greet(name) {
  return "Welcome! " + name; /////PURE FUNCTION because using parameter (input).
}
////OR
function add(num1, num2) {
  return num1 + num2 + 1; /////PURE FUNCTION because using as it is value of parameter;
}
```

Это мы назвали чисто функциональным подходом.

## **Функции высшего порядка - High Order Functions**
Теперь поговорим о функциях высшего порядка. Какие они такие? Как следует из названия, они имеют высокий порядок, что означает, что они принимают функции как на входе, или они также могут возвращать на вывод функцию. Смущенны?

Не волнуйтесь, давайте перейдем к коду.

```js
const fullName = (firstname) => {
    return (secondname) => {
         return firstname + " " + secondname;
    }
}
const name = fullName("Uzair"); // fullName return a function now named as name.
const fullOne = name("Bangee"); ///calling named function return firstname + " " + secondname
console.log(fullOne); ///Uzair Bangee
```

Это функция высокого порядка, из которой мы возвращаем другую функцию. Если вам сложно понять приведенный выше фрагмент кода. Кстати, вы знакомы с этой функцией? Да, верно? Это стрелочная функция Es6. Мне они нравятся по сравнению с простыми функциями Es5.

Давайте посмотрим на другой пример, который принимает входные данные как функцию.

```js
const fullName = (name, fname, lname) => {    ///Here name refers to function
  return name(fname, lname);
}
function echoName(fname, secondname){  
  return fname + " " + secondname;
}
///echoName is the function we will pass in the parameter
const name = fullName(echoName, "Uzair", "Bangee");
console.log(name); ///Uzair Bangee
```
Это случайный пример функции, которая принимает входные данные. Эти функции часто называют функциями обратного вызова - `Callback Functions`. Это обширная тема, я не буду вдаваться в нее.

## **Не повторяйте цикл for**
Что я говорю? Не повторять? Да, есть некоторые функции массива, работа которых заключается в повторении и выполнении определенной функции. Идея функционального программирования состоит в том, чтобы использовать эти функции вместо цикла с `for` и `while` и сделать ваш код длинным.

Такие функции, как `.map ()`, `.filter ()`, `.reduce ()`, `.some ()` и многие другие…

```js
const names = ['Uzair', "Umair", "John", "Sam"];
const fullname = names.map((item, index) => {
  return item + " " + "is a developer";
})
console.log(fullname)
// ["Uzair is a developer","Umair is a developer","John is a developer","Sam is a developer"]
```
Вот один случайный пример с `.map ()`. Вы можете выполнить эти функции самостоятельно, поверьте мне, они сделают ваш день лучше.

---

Это способы достижения парадигмы функционального программирования. Это может просто организовать ваш код и сделать его чище. Вместо того, чтобы писать в императивном стиле, заставляя код постоянно работать, это не лучший способ, а подход объектно-ориентированного программирования более сложен и запутан. Если вы когда-либо пробовали, то знаете, как это может сбивать с толку.

На сегодня все. Продолжайте практиковать до следующего раза.

<small>оригинал [Uzair Bangee](https://medium.com/@uzairbangee/why-functional-programming-with-javascript-recipes-to-achieve-this-programming-paradigm-a5a8c8b14aae)</small> перевел [Yaroslav Kolesnikov](https://github.com/YaroslavW)
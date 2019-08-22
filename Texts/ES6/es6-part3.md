# Знаете ли вы ES6 - часть 3.

[Знаете ли вы ES6 - часть 1.](https://github.com/YaroslavW/trening-js/blob/master/Texts/ES6/es6-part1.md)

[Знаете ли вы ES6 - часть 2.](https://github.com/YaroslavW/trening-js/blob/master/Texts/ES6/es6-part2.md)

Содержание:

- IIFE Immediately Invoked Function Expression - Немедленно вызванное функциональное выражение.
- Closures - Замыкания.
- Synchronous vs Asynchronous - Синхронность -Асинхронность.
- Promises - Обещания (промисы)
- Async vs Await - Ожидания (асинк \ авейт)

## IIFE (Immediately Invoked Function Expression)

IIFE относится к выражению немедленного вызова функции. IIFE - это функция JavaScript, которая запускается сразу после ее определения. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE "mozilla.org")

IIFE отличается от традиционной функции, которую мы можем назвать несколько раз, но IIFE нет. IIFE используется только один раз. Поэтому мы не будем использовать его снова. Это означает, что переменные в функции не доступны, поэтому они неизменны.

Одним из преимуществ IIFE является создание локальной области, и это очень важно, если у меня много js-файлов, которые могут иметь одинаковые имена переменных. Таким образом, IIFE избегает переопределения и защищает область своих переменных.

Есть два способа вызвать функцию:

1. Во-первых, наш традиционный способ определить и вызвать функцию

```javascript
function printName() {
  let myName = "Yaroslav";
  console.log(myName);
  // Yaroslav
}

//Invoke
printName();
```

2. Во-вторых, используя IIFE. Мы заключаем нашу функцию в скобки, затем добавляем пару скобок в конце функции

(Наша функция) (Invoke - вызвать)

(Наша функция) ()

```javascript
(function printName() {
  let myName = "Yaroslav";
  console.log(myName);
  // Yaroslav
})();
```

На самом деле нам не нужно давать имя функции, потому что она вызывается только один раз. Так что IIFE обычно будет анонимной функцией

```javascript
(function() {
  let myName = "Yaroslav";
  console.log(myName);
  // Yaroslav
})();
```

## Closures - Замыкания

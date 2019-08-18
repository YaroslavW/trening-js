# Знаете ли вы ES6 - часть 1.

## ES6 - это JS, ES6 - это следующее поколение Javascript.

ES6 настолько полезен, потому что все функции ES6 обычно используют приложения React, Angular и Vue. В общем, ES6 позволяет нам писать чистые и надежные react - приложения, и это помогает нам делать более мощные вещи.

Содержание:

- Let and const
- Arrow functions (Стрелочные функции)
- Modules (Exports & Imports) - Модули (экспорт импорт)
- Classes - Классы.
- The threeDots ...
- Destructuring - Деструктуризация.

### Let and const

Let and const - это разные способы создания переменных.

У нас есть `var` для создания переменной в js, но с ES6, там были введены два разных ключевых слова, `let` и `const`.
`var` все еще работает, но вам настоятельно рекомендуется использовать `let` и `const`
`let` это новый var, вы используете его для создания переменной со значением. Но самым важным моментом здесь является использование `let`, если вы хотите создать переменную, которая действительно является переменной.
Используйте `const`, если вы планируете создать постоянное значение, поэтому то, что вы назначаете только один раз и никогда не меняете.

В обычном JS мы используем ключевое слово `var` для создания переменной

```javascript
var myName = "Yaroslav";
console.log(myName);
// Yaroslav

myName = "Kolesnikov";
console.log(myName);
// Kolesnikov
```

В ES6 мы можем использовать ключевое слово let вместо var для создания переменной

```javascript
let myName = "Yaroslav";
console.log(myName);
// Yaroslav

myName = "Kolesnikov";
console.log(myName);
// Kolesnikov
```

Также мы можем использовать `const` для создания постоянной переменной. Это означает, что мы не можем переназначить это значение
В следующем примере мы получаем ОШИБКУ, потому что мы пытаемся переназначить постоянную переменную

```javascript
const myName = "Yaroslav";
console.log(myName);

myName = "Kolesnikov"; //ERROR
console.log(myName);
```

### Arrow functions -Стрелочные функции.

Функции со стрелками - это другой синтаксис для создания функций Javascript.
Обычная функция JavaScript, конечно, выглядит следующим образом.

```javascript
function printName(name) {
  console.log(name);
}

printName(); //undefined
printName("Yaroslav"); //Yaroslav
```

Стрелочная так:

```javascript
const printName = name => {
  console.log(name);
};

printName();
printName("Yaroslav");
```

Есть несколько альтернатив этому синтаксису
Если у нас есть один аргумент

```javascript
const printName = name => {
  console.log(name);
};

printName();
printName("Yaroslav");
```

Если у нас есть функция, которая не получает аргументов, нам нужно передать пустую пару скобок

```javascript
const printName = () => {
  console.log("Yaroslav");
};

printName();
```

Если у нас есть функция, которая получает более одного аргумента, нам нужны скобки

```javascript
const printName = (name1, name2, age) => {
  console.log(name1, name2, age);
};

printName("Yaroslav", "Kolesnikov", 48);
//Yaroslav
//Kolesnikov
//48
```

Также мы можем обновить наше тело функции

```javascript
const mul = number => {
  return number * 5;
};

console.log(mul(3)); //15
```

Мы можем обновить эту функцию и удалить фигурные скобки и ключевое слово `return`.

```javascript
const mul = number => number * 5;
console.log(mul(3));
```

Мы также можем обновить

```javascript
const mul = number => number * 5;
console.log(mul(3)); //15
```

### Modules (Exports & Imports) - Модули (экспорт импорт).

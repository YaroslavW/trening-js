# Знаете ли вы ES6 - часть 1.

## ES6 - это JS, ES6 - это следующее поколение Javascript.

ES6 настолько полезен, потому что все функции ES6 обычно используют приложения React, Angular и Vue. В общем, ES6 позволяет нам писать чистые и надежные react - приложения, и это помогает нам делать более мощные вещи.

Содержание:

- Let and const
- Arrow functions
- Modules (Exports & Imports)
- Classes
- The threeDots ...
- Destructuring

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

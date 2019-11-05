# Когда не стоит использовать стрелочные функции.

Вот несколько случаев, когда вам, вероятно, следует избегать использования функций стрелок - `arrow functions`.

![logo when not to use arrow functions](img/logo_arrow_functions.jpg)

## 1. Object Methods

```javascript
const person = {
  points: 23,
  score: () => {
    console.log(this); // 'this' here is window
    this.points++; // 'this' here is window, not person
  }
};
person.score();
console.log(person.points); // 23
```

Когда вы делаете `console.log(person.points)`, результат должен быть `24`, но он все равно `23`.

Почему? потому что это всегда ограничено родителем, который в данном случае является окном - `window` (`this` не привязан ни к чему другому).

Вместо этого вы должны использовать обычную функцию.

```js
const person = {
  points: 23,
  score: function() {
    this.points++; // 'this' here is person
  }
};
person.score();
console.log(person.points); // 24
```

---

## 2. Callback Functions with Dynamic Context

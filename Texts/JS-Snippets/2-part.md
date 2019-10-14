# 127 полезных фрагментов JavaScript, которые вы можете выучить за 30 секунд или меньше - часть 1 из 6.

![logo](img/logo-2.jpg)

Это вторая часть этой серии с полезными фрагментами JavaScript, которые вы можете выучить за 30 секунд или меньше. Вы можете найти [первую часть здесь](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/1-part.md).

---

## 22. deepFlatten

Этот фрагмент рекурсивно сглаживает массив.

```javascript
const deepFlatten = arr =>
  [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```

---

## 23. default

Этот фрагмент назначает значения по умолчанию для всех свойств объекта, которые не определены -`undefined`.

```javascript
const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```

---

## 24. defer

Этот фрагмент задерживает выполнение функции до тех пор, пока текущий стек вызовов не будет очищен.

```javascript
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, "a"), console.log("b"); // logs 'b' then 'a'
```

---

##

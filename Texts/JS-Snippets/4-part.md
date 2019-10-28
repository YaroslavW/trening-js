# 127 полезных фрагментов JavaScript, которые вы можете выучить за 30 секунд или меньше - часть 4 из 6.

![logo](img/logo-4.jpg)

Это третья часть этих коротких фрагментов. Осталось еще три части. Здесь [часть первая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/1-part.md), [часть вторая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/2-part.md) и [часть третья](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/3-part.md).

---

## 64. isBrowser

Этот фрагмент можно использовать для определения, является ли текущая среда выполнения браузером. Это полезно для избежания ошибок при запуске интерфейсных модулей на сервере (узел).

```javascript
const isBrowser = () => ![typeof window, typeof document].includes("undefined");

isBrowser(); // true (browser)
isBrowser(); // false (Node)
```

---

## 65. isBrowserTabFocused

Этот фрагмент можно использовать для определения того, фокусируется ли вкладка браузера.

```javascript
const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
```

---

## 66. isLowerCase

Этот фрагмент можно использовать для определения того, представленна ли строка в нижнем регистре.

```javascript
const isLowerCase = str => str === str.toLowerCase();

isLowerCase("abc"); // true
isLowerCase("a3@$"); // true
isLowerCase("Ab4"); // false
```

---

## 67. isNil

Этот фрагмент можно использовать для проверки, является ли значение пустым - `null` или неопределенным - `undefined`.

```javascript
const isNil = val => val === undefined || val === null;

isNil(null); // true
isNil(undefined); // true
```

---

## 68. isNull

Этот фрагмент можно использовать для проверки, является ли значение `null`.

```javascript
const isNull = val => val === null;

isNull(null); // true
```

---

## 69. isNumber

Этот фрагмент можно использовать для проверки, является ли предоставленное значение числом.

```javascript
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

isNumber("1"); // false
isNumber(1); // true
```

---

## 70. isObject

Этот фрагмент можно использовать для проверки, является ли предоставленное значение объектом. Он использует конструктор Object для создания обертки объекта для данного значения.

Если это уже объект, будет возвращен тип объекта, соответствующий данному значению. В противном случае будет возвращен новый объект.

```javascript
const isObject = obj => obj === Object(obj);

isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(["Hello!"]); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```

---

## 71. isObjectLike

Этот фрагмент может быть использован для проверки, если значение не является нулевым - `null` и что его `typeof` является «объектом».

```javascript
const isObjectLike = val => val !== null && typeof val === "object";

isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```

---

## 72. isPlainObject

Этот фрагмент проверяет, является ли значение объектом, созданным конструктором Object.

```javascript
const isPlainObject = val =>
  !!val && typeof val === "object" && val.constructor === Object;

isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```

---

## 73. isPromiseLike

Этот фрагмент проверяет, выглядит ли объект как `Promise`.

```javascript
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";

isPromiseLike({
  then: function() {
    return "";
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```

---

## 74. isSameDate

Этот фрагмент можно использовать для проверки совпадения двух дат.

```javascript
const isSameDate = (dateA, dateB) =>
  dateA.toISOString() === dateB.toISOString();

isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```

---

## 75. isString

Этот фрагмент можно использовать для проверки того, является ли аргумент строкой.

```javascript
const isString = val => typeof val === "string";

isString("10"); // true
```

---

## 76. isSymbol

Этот фрагмент можно использовать для проверки того, является ли аргумент символом.

```javascript
const isSymbol = val => typeof val === "symbol";

isSymbol(Symbol("x")); // true
```

---

## 77. isUndefined

Этот фрагмент можно использовать для проверки, является ли значение неопределенным - `undefuned`.

```javascript
const isUndefined = val => val === undefined;

isUndefined(undefined); // true
```

---

## 78. isUpperCase

Этот фрагмент можно использовать для проверки того, является ли строка заглавной.

```javascript
const isUpperCase = str => str === str.toUpperCase();

isUpperCase("ABC"); // true
isLowerCase("A3@$"); // true
isLowerCase("aB4"); // false
```

---

## 79. isValidJSON

Этот фрагмент можно использовать, чтобы проверить, является ли строка валидным JSON.

```javascript
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```

---

## 80. last

Этот фрагмент возвращает последний элемент массива.

```javascript
const last = arr => arr[arr.length - 1];

last([1, 2, 3]); // 3
```

---

## 81. matches

Этот фрагмент сравнивает два объекта, чтобы определить, содержит ли первый объект те же значения свойств, что и второй.

```javascript
const matches = (obj, source) =>
  Object.keys(source).every(
    key => obj.hasOwnProperty(key) && obj[key] === source[key]
  );

matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true }); // true
matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true }); // false
```

---

## 82. maxDate

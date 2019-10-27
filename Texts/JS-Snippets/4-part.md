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

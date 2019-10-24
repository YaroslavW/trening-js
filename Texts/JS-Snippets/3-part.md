# 127 полезных фрагментов JavaScript, которые вы можете выучить за 30 секунд или меньше - часть 3 из 6.

![logo](img/logo-3.jpg)

Это третья часть этих коротких фрагментов. Осталось еще три части. Здесь [часть первая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/1-part.md) и [часть вторая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/2-part.md).

---

## 43. Get Time From Date

Этот фрагмент можно использовать для получения времени из объекта `Date` в виде строки.

```javascript
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

getColonTimeFromDate(new Date()); // "08:38:00"
```

---

## 44. Get Days Between Dates

Этот фрагмент можно использовать, чтобы найти разницу в днях между двумя датами.

```javascript
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

getDaysDiffBetweenDates(new Date("2019-01-13"), new Date("2019-01-15")); // 2
```

---

## 45. getStyle

Этот фрагмент можно использовать для получения значения правила CSS для определенного элемента.

```javascript
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector("p"), "font-size"); // '16px'
```

---

## 46. getType

Этот фрагмент может быть использован для получения типа значения.

```javascript
const getType = v =>
  v === undefined
    ? "undefined"
    : v === null
    ? "null"
    : v.constructor.name.toLowerCase();

getType(new Set([1, 2, 3])); // 'set'
```

---

## 47. hasClass

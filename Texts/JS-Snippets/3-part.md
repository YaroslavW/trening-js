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

Этот фрагмент проверяет, есть ли у элемента определенный класс.

```javascript
const hasClass = (el, className) => el.classList.contains(className);
hasClass(document.querySelector("p.special"), "special"); // true
```

---

## 48. head

Этот фрагмент возвращает заголовок - `head` списка.

```javascript
const head = arr => arr[0];

head([1, 2, 3]); // 1
```

---

## 49. hide

Этот фрагмент можно использовать, чтобы скрыть все указанные элементы.

```javascript
const hide = (...el) => [...el].forEach(e => (e.style.display = "none"));

hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
```

---

## 50. httpsRedirect

Этот фрагмент можно использовать для перенаправления с HTTP на HTTPS в определенном домене.

```javascript
const httpsRedirect = () => {
  if (location.protocol !== "https:")
    location.replace("https://" + location.href.split("//")[1]);
};

httpsRedirect(); // If you are on http://mydomain.com, you are redirected to https://mydomain.com
```

---

## 51. indexOfAll

Этот фрагмент можно использовать для получения всех индексов значения в массиве, который возвращает пустой массив в случае, если это значение не включено в него.

```javascript
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```

---

## 52. initial

Этот фрагмент возвращает все элементы массива, кроме последнего.

```javascript
const initial = arr => arr.slice(0, -1);

initial([1, 2, 3]); // [1,2]const initial = arr => arr.slice(0, -1);
initial([1, 2, 3]); // [1,2]
```

---

## 53. insertAfter

Этот фрагмент можно использовать для вставки строки HTML после конца определенного элемента.

```javascript
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);

insertAfter(document.getElementById("myId"), "<p>after</p>"); // <div id="myId">...</div> <p>after</p>
```

---

## 54. insertBefore

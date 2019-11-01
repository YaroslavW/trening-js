# 127 полезных фрагментов JavaScript, которые вы можете выучить за 30 секунд или меньше - часть 4 из 6.

![logo](img/logo-5.jpg)

Это четвертая часть этих коротких фрагментов. Осталось еще две части. Здесь [часть первая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/1-part.md), [часть вторая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/2-part.md), [часть третья](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/3-part.md) и [ четвертая часть](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/4-part.md).

---

## 85. minN

Этот фрагмент возвращает `n` самых маленьких элементов из списка. Если `n` больше или равно длине списка, он вернет исходный список (отсортированный в порядке возрастания).

```javascript
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

minN([1, 2, 3]); // [1]
minN([1, 2, 3], 2); // [1,2]
```

---

## 86. negate

Этот фрагмент можно использовать для применения оператора not (`!`) К функции предиката с ее аргументами.

```javascript
const negate = func => (...args) => !func(...args);

[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```

---

## 87. nodeListToArray

Этот фрагмент может быть использован для преобразования nodeList в массив.

```javascript
const nodeListToArray = nodeList => [...nodeList];

nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```

---

## 88. pad

Этот фрагмент можно использовать для дополнения - `pad` строки с обеих сторон указанным символом, если она короче указанной длины.

```javascript
const pad = (str, length, char = " ") =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

pad("cat", 8); // '  cat   '
pad(String(42), 6, "0"); // '004200'
pad("foobar", 3); // 'foobar'
```

---

## 89. radsToDegrees

Этот фрагмент можно использовать для преобразования угла в радианах в градусы.

```javascript
const radsToDegrees = rad => (rad * 180.0) / Math.PI;

radsToDegrees(Math.PI / 2); // 90
```

---

## 90. Random Hexadecimal Color Code

Этот фрагмент можно использовать для генерации случайного шестнадцатеричного цветового кода.

```javascript
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

randomHexColorCode(); // "#e34155"
```

---

## 91. randomIntArrayInRange

Этот фрагмент можно использовать для генерации массива с `n` случайными целыми числами в указанном диапазоне.

```javascript
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```

---

## 92. randomIntegerInRange

Этот фрагмент можно использовать для генерации случайного целого числа в указанном диапазоне.

```javascript
const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

randomIntegerInRange(0, 5); // 3
```

---

## 93. randomNumberInRange

Этот фрагмент можно использовать для возврата случайного числа в указанном диапазоне.

```javascript
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

randomNumberInRange(2, 10); // 6.0211363285087005
```

---

## 94. readFileLines

Этот фрагмент можно использовать для чтения файла, получив массив строк из файла.

```javascript
const fs = require("fs");
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString("UTF8")
    .split("\n");

let arr = readFileLines("test.txt");
console.log(arr); // ['line1', 'line2', 'line3']
```

---

## 95. Redirect to a URL

Этот фрагмент можно использовать для перенаправления на указанный URL-адрес.

```javascript
const redirect = (url, asLink = true) =>
  asLink ? (window.location.href = url) : window.location.replace(url);

redirect("https://google.com");
```

---

## 96. reverse

Этот фрагмент может быть использован для разворота строки.

```javascript
const reverseString = str => [...str].reverse().join("");

reverseString("foobar"); // 'raboof'
```

---

## 97. round

Этот фрагмент можно использовать для округления числа до указанного числа цифр.

```javascript
const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

round(1.005, 2); // 1.01
```

---

## 98. runPromisesInSeries

Этот фрагмент можно использовать для последовательного выполнения массива обещаний `promises`.

```javascript
const runPromisesInSeries = ps =>
  ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

runPromisesInSeries([() => delay(1000), () => delay(2000)]);
// Выполняет каждое обещание последовательно,
//  на выполнение которого уходит в общей сложности 3 секунды
```

---

## 99. sample

Этот фрагмент можно использовать для получения случайного числа из массива.

```javascript
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

sample([3, 7, 9, 11]); // 9
```

---

## 100. sampleSize

Этот фрагмент можно использовать для получения n случайных элементов из уникальных позиций массива вплоть до размера массива. Элементы в массиве перемешиваются с использованием [алгоритма Фишера-Йейтса](https://github.com/30-seconds/30-seconds-of-code#shuffle).

```javascript
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

sampleSize([1, 2, 3], 2); // [3,1]
sampleSize([1, 2, 3], 4); // [2,3,1]
```

---

## 101. scrollToTop

Этот фрагмент можно использовать для плавной прокрутки к верхней части текущей страницы.

```javascript
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();
```

---

## 102. serializeCookie

Этот фрагмент можно использовать для сериализации пары имя-значение cookie в строку заголовка Set-Cookie.

```javascript
const serializeCookie = (name, val) =>
  `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

serializeCookie("foo", "bar"); // 'foo=bar'
```

---

## 103. setStyle

Этот фрагмент можно использовать для установки значения правила CSS для определенного элемента.

```javascript
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector("p"), "font-size", "20px");
// Первый элемент <p> на странице будет иметь размер шрифта 20 пикселей
```

---

## 104. shallowClone

Этот фрагмент можно использовать для создания мелкого клона объекта.

```javascript
const shallowClone = obj => Object.assign({}, obj);

const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```

---

## 105. show

Этот фрагмент можно использовать для отображения всех указанных элементов.

```javascript
const show = (...el) => [...el].forEach(e => (e.style.display = ""));

show(...document.querySelectorAll("img"));
// Показывает все элементы <img> на странице
```

---

## 106. shuffle

Этот фрагмент можно использовать для случайного упорядочения элементов массива с использованием [алгоритма Фишера-Йейтса](https://github.com/30-seconds/30-seconds-of-code#shuffle).

```javascript
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

const foo = [1, 2, 3];
shuffle(foo); // [2, 3, 1], foo = [1, 2, 3]
```

---

Это пятая часть этих коротких фрагментов. Осталось еще одна часть.

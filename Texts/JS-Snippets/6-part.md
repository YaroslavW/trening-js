# 127 полезных фрагментов JavaScript, которые вы можете выучить за 30 секунд или меньше - часть 4 из 6.

![logo](img/logo-6.jpg)

Это четвертая часть этих коротких фрагментов. Осталось еще две части. Здесь [часть первая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/1-part.md), [часть вторая](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/2-part.md), [часть третья](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/3-part.md), [ четвертая часть](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/4-part.md) и [пятая часть](https://github.com/YaroslavW/trening-js/blob/master/Texts/JS-Snippets/5-part.md).

---

## 107. similarity

Этот фрагмент можно использовать для возврата массива элементов, которые появляются в двух массивах.

```javascript
const similarity = (arr, values) => arr.filter(v => values.includes(v));

similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```

---

## 108. sleep

Этот фрагмент можно использовать, чтобы задержать выполнение асинхронной функции, поместив ее в режим сна.

```javascript
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log("I woke up after 1 second.");
}
```

---

## 109. smoothScroll

Этот фрагмент можно использовать для плавной прокрутки элемента, по которому он вызывается, в видимую область окна браузера.

```javascript
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth"
  });

smoothScroll("#fooBar"); // плавно прокручивается к элементу с идентификатором fooBar
smoothScroll(".fooBar"); // плавно прокручивается до первого элемента с классом fooBar
```

---

## 110. sortCharactersInString

Этот фрагмент можно использовать для сортировки символов в строке по алфавиту.

```javascript
const sortCharactersInString = str =>
  [...str].sort((a, b) => a.localeCompare(b)).join("");

sortCharactersInString("cabbage"); // 'aabbceg'
```

---

## 111. splitLines

Этот фрагмент можно использовать для разбиения многострочной строки на массив строк.

```javascript
const splitLines = str => str.split(/\r?\n/);

splitLines("This\nis a\nmultiline\nstring.\n"); // ['This', 'is a', 'multiline', 'string.' , '']
```

---

## 112. stripHTMLTags

Этот фрагмент можно использовать для удаления тегов HTML / XML из строки.

```javascript
const stripHTMLTags = str => str.replace(/<[^>]*>/g, "");

stripHTMLTags("<p><em>lorem</em> <strong>ipsum</strong></p>"); // 'lorem ipsum'
```

---

## 113. sum

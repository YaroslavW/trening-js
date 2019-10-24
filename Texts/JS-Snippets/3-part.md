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

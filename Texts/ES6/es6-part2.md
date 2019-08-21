# Знаете ли вы ES6 - часть 2.

Прежде чем вы начнете читать эту часть, мы обсудили некоторые функции ES6 [здесь](https://github.com/YaroslavW/trening-js/blob/master/Texts/ES6/es6-part1.md)

Как мы уже говорили, ES6 - это JS.

ES6 следующее поколение Javascript. В общем, ES6 позволяет нам писать чистые и надежные react-приложения, и это помогает нам делать более мощные вещи.

Содержание:

- Array functions - Функции массива
- Template literals - Шаблонные литералы
- Object literals - Объектные литералы
- For Of

## Array functions - Функции массива.

Есть много функций, которые мы можем выполнять с массивом, таких как `map`, `concat`, `join`, `splice`, и таких методов много. Все эти методы не ES6, а обычные JS.

`map` - это встроенный метод массива, который возвращает реальный новый массив.

```javascript
const numbers = [1, 2, 3];
const doubleNumbers = numbers.map(num => {
  return num * 2;
});

console.log(numbers); //[1, 2, 3]
console.log(doubleNumbers); //[2, 4, 6]
```

`concat` - это метод, который объединяет два или более массивов и возвращает новый массив со значениями объединенных массивов.

```javascript
const myName = ["Yaroslav", "Kolesnikov"];
const myInfo1 = ["Computer", "Science", "Student"];
const myInfo2 = ["Front End Developer"];

const concatTwoArray = (arr1, arr2, arr3) => arr1.concat(arr2, arr3);

console.log(concatTwoArray(myName, myInfo1, myInfo2));
// ["Yaroslav", "Kolesnikov", "Computer", "Science", "Student", "Front End Developer"]
```

`join` - это метод, который объединяет элементы массива в строку и возвращает окончательную строку.
Окончательная строка будет разделена указанным разделителем, таким как разделитель по умолчанию, который является запятой (`,`), bar (`|`), тире (`-`), пробел или любой другой разделитель.

```javascript
let fruits = ["Yaroslav", "Kolesnikov", "Yousef", "YaroslavW", "gitHub"];
let energy1 = fruits.join();
let energy2 = fruits.join(" ");
let energy3 = fruits.join("|");
let energy4 = fruits.join(" and ");
console.log(energy1, energy2, energy3, energy4);
// Yaroslav,Kolesnikov,Yousef,YaroslavW,gitHub Yaroslav Kolesnikov Yousef YaroslavW gitHub Yaroslav|Kolesnikov|Yousef|YaroslavW|gitHub Yaroslav and Kolesnikov and Yousef and YaroslavW and gitHub
```

`splice` метод - это добавление элементов в массив, удаление элементов из массива и возврат последнего элемента.

В следующем примере мы удаляем один элемент из индекса 2 (третий элемент). Затем мы удаляем 3 элемента из индекса и добавляем 2 элемента [Computer and Science]

```javascript
let names = ["Yaroslav", "Kolesnikov", "Yousef", "Yaroslav", "gitHub"];
names.splice(2, 1);
console.log(names);
// ["Yaroslav", "Kolesnikov", "Yaroslav", "gitHub"]

names.splice(2, 3, "Computer", "Science");
console.log(names);
//["Yaroslav", "Kolesnikov", "Computer", "Science"]
```

[Узнать больше](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array# "developer.mozilla.org")

## Template literals - Шаблонные литералы.

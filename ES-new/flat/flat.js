// old
//  Здесь, в результате обработки массива объектов с помощью функции map,
//  у нас оказывается многомерный массив. Его мы хотим сделать более «плоским».
let courses = [
  {
    subject: "math",
    numberOfStudents: 3,
    waitlistStudents: 2,
    students: ["Janet", "Martha", "Bob", ["Phil", "Candace"]]
  },
  {
    subject: "english",
    numberOfStudents: 2,
    students: ["Wilson", "Taylor"]
  },
  {
    subject: "history",
    numberOfStudents: 4,
    students: ["Edith", "Jacob", "Peter", "Betty"]
  }
];

let courseStudents = courses.map(course => course.students);
// [
//   [ 'Janet', 'Martha', 'Bob', [ 'Phil', 'Candace' ] ],
//   [ 'Wilson', 'Taylor' ],
//   [ 'Edith', 'Jacob', 'Peter', 'Betty' ]
// ]

// тут мы могли бы попытаться воспользоваться чем-то вроде [].concat.apply([], courseStudents)

// Теперь в нашем распоряжении имеется метод Array.prototype.flat,
// который принимает необязательный аргумент, указывающий то,
// на какой уровень надо «поднять» элементы массива.
let courseStudents = [
  ["Janet", "Martha", "Bob", ["Phil", "Candace"]],
  ["Wilson", "Taylor"],
  ["Edith", "Jacob", "Peter", "Betty"]
];

let flattenOneLevel = courseStudents.flat(1);
console.log(flattenOneLevel);
// [
//   'Janet',
//   'Martha',
//   'Bob',
//   [ 'Phil', 'Candace' ],
//   'Wilson',
//   'Taylor',
//   'Edith',
//   'Jacob',
//   'Peter',
//   'Betty'
// ]

let flattenTwoLevels = courseStudents.flat(2);
console.log(flattenTwoLevels);
// [
//   'Janet',   'Martha',
//   'Bob',     'Phil',
//   'Candace', 'Wilson',
//   'Taylor',  'Edith',
//   'Jacob',   'Peter',
//   'Betty'
// ]

// Обратите внимание на то, что если этому методу не передавать аргументов,
//  то он будет поднимать элементы массива на один уровень.
// Это очень важно, так как в нашем случае нужно преобразовать массив
// в полностью плоскую структуру данных. Вот что получается
// при использовании этого метода без параметров:
let courseStudents = [
  ["Janet", "Martha", "Bob", ["Phil", "Candace"]],
  ["Wilson", "Taylor"],
  ["Edith", "Jacob", "Peter", "Betty"]
];

let defaultFlattened = courseStudents.flat();
console.log(defaultFlattened);
// [
//   'Janet',
//   'Martha',
//   'Bob',
//   [ 'Phil', 'Candace' ],
//   'Wilson',
//   'Taylor',
//   'Edith',
//   'Jacob',
//   'Peter',
//   'Betty'
// ]

// Если в одномерный массив нужно преобразовать массив,
// точные параметры которого неизвестны, методу flat можно передать значение Infinity.
let courseStudents = [
  ["Janet", "Martha", "Bob", ["Phil", "Candace"]],
  ["Wilson", "Taylor"],
  ["Edith", "Jacob", "Peter", "Betty"]
];

let alwaysFlattened = courseStudents.flat(Infinity);
console.log(alwaysFlattened);
// [
//   'Janet',   'Martha',
//   'Bob',     'Phil',
//   'Candace', 'Wilson',
//   'Taylor',  'Edith',
//   'Jacob',   'Peter',
//   'Betty'
// ]

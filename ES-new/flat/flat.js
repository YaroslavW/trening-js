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

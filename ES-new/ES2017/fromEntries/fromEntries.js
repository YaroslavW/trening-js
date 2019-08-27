// В ES2017 появился метод Object.entries. Он преобразует объект в массив.
//  Например, это может выглядеть так:
let students = {
  amelia: 20,
  beatrice: 22,
  cece: 20,
  deirdre: 19,
  eloise: 21
};

Object.entries(students);
// [
//  [ 'amelia', 20 ],
//  [ 'beatrice', 22 ],
//  [ 'cece', 20 ],
//  [ 'deirdre', 19 ],
//  [ 'eloise', 21 ]
// ]

// Но для того, чтобы преобразовать массив обратно в объект,
// к сожалению, удобных средств не существовало.
//  Всё приходилось делать вручную, с помощью цикла:
let students = {
  amelia: 20,
  beatrice: 22,
  cece: 20,
  deirdre: 19,
  eloise: 21
};

// преобразуем объект в массив для того чтобы воспользоваться методом .filter()
let overTwentyOne = Object.entries(students).filter(([name, age]) => {
  return age >= 21;
}); // [ [ 'beatrice', 22 ], [ 'eloise', 21 ] ]

// преобразуем многомерный массив обратно в объект
let drinkingAgeStudents = {};
for (let [name, age] of overTwentyOne) {
  drinkingAgeStudents[name] = age;
}
// { beatrice: 22, eloise: 21 }

// NEW
let students = {
  amelia: 20,
  beatrice: 22,
  cece: 20,
  deirdre: 19,
  eloise: 21
};

// преобразуем объект в массив для того чтобы воспользоваться методом .filter()
let overTwentyOne = Object.entries(students).filter(([name, age]) => {
  return age >= 21;
}); // [ [ 'beatrice', 22 ], [ 'eloise', 21 ] ]

// преобразуем многомерный массив обратно в объект
let drinkingAgeStudents = Object.fromEntries(overTwentyOne);
// { beatrice: 22, eloise: 21 }

// NOTE!!!
// Важно отметить, что массивы и объекты недаром являются различными структурами данных.
//  В некоторых случаях преобразование одной в другую ведёт к потере данных.
// В следующем примере можно видеть, как при преобразовании массива в объект теряются
//  те элементы массива, которые оказываются дублирующимися ключами объекта.
let students = [
  ["amelia", 22],
  ["beatrice", 22],
  ["eloise", 21],
  ["beatrice", 20]
];

let studentObj = Object.fromEntries(students);
// { amelia: 22, beatrice: 20, eloise: 21 }
// пропала первая запись beatrice!

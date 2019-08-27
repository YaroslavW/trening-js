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

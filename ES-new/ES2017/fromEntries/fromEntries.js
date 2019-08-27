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

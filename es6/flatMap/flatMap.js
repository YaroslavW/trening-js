let grades = [78, 62, 80, 64];

let flatMapped = grades.flatMap(grade => [grade, grade + 7]);
// [
//  78, 85, 62, 69,
//  80, 87, 64, 71
// ]

// Вспомните о том, что по умолчанию метод Array.prototype.flat работает так,
// будто ему передана единица. Метод flatMap ведёт себя точно так же, то есть
//  — «поднимает» элементы массива лишь на 1 уровень.
// Он представляет собой результат комбинации методов map и flat.
let grades = [78, 62, 80, 64];

let flatMapped = grades.flatMap(grade => [grade, [grade + 7]]);
// [
//   78, [ 85 ],
//   62, [ 69 ],
//   80, [ 87 ],
//   64, [ 71 ]
// ]
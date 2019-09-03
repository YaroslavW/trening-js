let grades = [78, 62, 80, 64];

let flatMapped = grades.flatMap(grade => [grade, grade + 7]);
// [
//  78, 85, 62, 69,
//  80, 87, 64, 71
// ]

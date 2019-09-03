let grades = [78, 62, 80, 64];

let flatMapped = grades.map(grade => [grade, grade + 7]).flat();
// [
//  78, 85, 62, 69,
//  80, 87, 64, 71
// ]

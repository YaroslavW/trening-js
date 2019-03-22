const arrSort_1 = ["motorhead", "Motorhead", "Mötorhead"].sort();
console.log(arrSort_1);
// ["Motorhead", "Mötorhead", "motorhead"]

const arrSort_2 = ["motorhead", "Motorhead", "Mötorhead"].sort((a, b) =>
  a.localeCompare(b)
);
console.log(arrSort_2);
//  ["motorhead", "Motorhead", "Mötorhead"]
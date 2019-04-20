x > 100 ? 'Больше 100' : 'Меньше 100';
x > 100 ? (x > 200 ? 'Больше 200' : 'Между 100 и 200') : 'Меньше 100';


let one = 1, two = 2, three = 3;

console.log(one && two && three); // 3
console.log(0 && null); // 0



let one_1 = 1, two_2 = 2, three_3 = 3;

console.log(one_1 || two_2 || three_3); // 1
console.log(0 || null); // null
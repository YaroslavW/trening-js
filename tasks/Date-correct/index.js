const data = new Date(2020, 5, 13);
console.log(data);
// VM212:2 Sat Jun 13 2020 00:00:00 GMT+0300 (Eastern European Summer Time)

const data1 = new Date(2020, 05, 13);
console.log(data1);
//  Sat Jun 13 2020 00:00:00 GMT+0300 (Eastern European Summer Time)

const data2 = new Date('2020/05/13');
console.log(data2);
// VM263:2 Wed May 13 2020 00:00:00 GMT+0300 (Eastern European Summer Time)

const data3 = new Date('20/05/13');
console.log(data3);
// VM297:2 Invalid Date
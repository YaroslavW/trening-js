// const shape = {
//   redius: 10,
//   diameter() {
//     return this.redius * 2;
//   },
//   parameter: () => 2 * Math.PI * this.radius
// };
// console.log(shape.diameter(), shape.parameter());
// 20 NaN
// Потому что контекст стрелочной функции - глобальный. а там нет такой переменной и
// получается что 2 * Math.PI * undefined = NaN
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
};
console.log(`diameter= ${shape.diameter()}  perimeter=${shape.perimeter()}`);
// diameter= 20  perimeter=62.83185307179586

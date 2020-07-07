let car = {
  speed: 50,
  wheels: 4,
  voise() {
    console.log("Fa-Fa-fa");
  },
};

let bigCar = {
  weight: 3000,
  __proto__: car,
  speed: 90,
};

const smallCar = {
  weight: 500,
  speed: 20,
  __proto__: car,
};

bigCar.voise();
// Fa-Fa-fa
console.log(bigCar.speed);

smallCar.voise();
// Fa-Fa-fa
console.log(smallCar.weight);
// 500

console.log(bigCar.weight);
// 3000

console.log(smallCar.speed);
// 20

console.log(bigCar.speed);
// 90

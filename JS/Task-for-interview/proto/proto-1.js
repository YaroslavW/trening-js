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
};

bigCar.voise();

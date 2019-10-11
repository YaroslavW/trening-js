let spaceship = {
  homePlanet: "Earth",
  color: "red"
};
let tryReassigment = obj => {
  obj = { ...obj, identified: false, "transport type": "flying" };
  console.log(obj);
};

tryReassigment(spaceship);

// spaceship = {
//   identified: false,
//   "transport type": "flying"
// };
console.log(spaceship);
// { identified: false, 'transport type': 'flying' }
// { homePlanet: 'Earth', color: 'red' }

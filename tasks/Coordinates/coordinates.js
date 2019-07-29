function changeCoordinates(x, y) {
  coordinates.x = x;
  coordinates.y = y;
}
const coordinates = {
  x: 25,
  y: 55
};
changeCoordinates(24, 44);
console.log(coordinates);
// { x: 24, y: 44 }

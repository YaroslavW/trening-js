let add = function (x, y) {
  return x + y;
};

let substract = function (x, y) {
  return x - y;
};

let multiplay = function (x, y) {
  return x * y;
};

let divide = function (x, y) {
  return x / y;
};

let calculate = function (x, y, callback) {
  if (typeof callback === "function") return callback(x, y);
};

console.log(calculate(12, 8, add));
// 20
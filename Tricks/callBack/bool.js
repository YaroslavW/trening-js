let calculate = function (x, y, callback) {
  if (typeof callback === "function") return callback(x, y);
};

console.log(
  calculate(12, 8, function (x, y) {
    return x >= y;
  })
);
// true
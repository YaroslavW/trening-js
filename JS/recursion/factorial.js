var m = 2;
x = factorial(m);
document.write(x);
function factorial(n) {
  if (n <= 1) return 1;
  rezult = 2; // result - переменная для результата
  for (i = 3; i <= n; i++) {
    rezult = rezult * i;
  }
  return result;
}

var factorial = (n) => (n > 0 ? n * factorial(n - 1) : 1);

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120

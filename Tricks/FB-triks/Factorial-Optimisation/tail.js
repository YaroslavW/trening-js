// Tail Call Optimization

// Insted of doing this
function factorial(n = 1) {
  if (n < 2) {
    return 1;
  }
  return factorial(n - 1) * n;
}

// do this
function factorial(n = 1, accum = 1) {
  if (n < 2) return 1;
  return factorial(n - 1, accum * n);
}

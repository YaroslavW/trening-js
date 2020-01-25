const bar = n => {
  let total = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      total += i;
    }
  }
  return total;
};

console.log(bar(100));
// 217

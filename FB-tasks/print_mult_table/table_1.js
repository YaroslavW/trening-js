function mult(x, y) {
  let res = "";
  for (let i = 1; i <= x; i++)
    for (let j = 0; j <= y; j++) {
      let n = i * (j + 1);
      res +=
        j === y ? "\n" : n > 99 ? `[${n}]` : n > 9 ? `[ ${n}]` : `[ ${n} ]`;
    }
  return res;
}
console.log(mult(10, 10));

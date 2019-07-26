function mult(x, y) {
  let res = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      let item = i * j;
      res += item > 99 ? `[${item}]` : item < 10 ? `[ ${item} ]` : `[ ${item}]`;
    }
    res += "\n";
  }
  console.log(res);
}
mult(10, 10);

function mult(x, y) {
  let res = "";
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      let calc = i * j;
      res += calc > 99 ? `[${calc}]` : calc < 10 ? `[ ${calc} ]` : `[ ${calc}]`;
    }
    res += "\n";
  }
  return console.log(res);
}
mult(10, 10);

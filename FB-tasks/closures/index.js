let func = {
  a: 1,
  b: 2,
  add: function(n) {
    return this.a + n;
  }
};
console.log(func.add(2));
// 3

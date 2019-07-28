const result = a => b => (b ? result(a + b) : a);
res = result(1)(2)(3)(4)();
console.log(res);

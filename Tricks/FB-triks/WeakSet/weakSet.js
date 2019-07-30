const ws = new WeakSet();
const one = {};
ws.add(one);
const hasOne = ws.has(one);
console.log(hasOne);

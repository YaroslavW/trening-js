const ws = new WeakSet();
const one = 1;
ws.add(one);
const hasOne = ws.has(one);
console.log(hasOne);
// Error
// const ws_1 = new WeakSet();
// const one_1 = {};
// ws_1.add(one_1);
// const hasOne_1 = ws_1.has(one_1);
// console.log(hasOne_1);
// true

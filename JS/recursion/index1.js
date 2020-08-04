function f(counter) {
  counter--;
  console.log(counter);
  if (counter != 0) f(counter);
  console.log(counter);
}
f(2);
// 1
// 0
// 0
// 1
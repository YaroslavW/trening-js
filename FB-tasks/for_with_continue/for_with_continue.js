// https://www.facebook.com/levelhunt/photos/a.1422238711243405/1667370123396928/?type=3&theater&ifg=1
let x = 0;
for (let i = 0; i <= 6; i += 2) {
  if (i === 4) {
    continue;
  }
  console.log(i);
  // 0 -> 2 -> 6
  x += i;
  // 2 + 6 = 8
}
console.log(x);
// 8

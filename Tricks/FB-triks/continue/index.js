let x = 0;
for (let i = 0; i <= 6; i += 2) {
  if (i === 4) {
    continue;
  }
  x += i;
}
console.log(x);
// 8

// In order to understand what is going on, you can display the value 
// of the variable (let i ) in the console before adding x+=i;
// 0
// 2
// 6
// and answer = 8
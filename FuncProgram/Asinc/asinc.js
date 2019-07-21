let i = 0;
function incrementAsync(obj) {
  setTimeout(() => {
    i++;
  }, 0);
}
incrementAsync();
console.log(i); // 0
console.log(i); // 1

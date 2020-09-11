export function even_or_odd(n: number): string {
  // if (n % 2 === 0) {
  //   return "Even";
  // } else {
  //   return "Odd";
  // }
  // return n % 2 === 0 ? 'Even':'Odd'
  return ["Even", "Odd"][n % 2];
}

console.log(even_or_odd(55));
console.log(even_or_odd(50));

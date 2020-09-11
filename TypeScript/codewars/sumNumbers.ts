export function sumNumbers(arr : number[]):number{
  const reducer = (acc: number, cur:number) => acc + cur;
  return arr.reduce(reducer, 0)
}

console.log(sumNumbers([1, -2, 3, 4, 5]))
// 11
console.log(sumNumbers([]))
// 0
console.log(sumNumbers([-1, -2, -3, -4, -5]))
// -15
const positiveSum = (arr : number[])=>arr.filter(num =>num>0).reduce((acc:number, cur:number)=>acc + cur)

console.log(positiveSum([1, -2, 3, 4, 5]));
// 13
console.log(positiveSum([-1, 3, 7]))
// 10
console.log(positiveSum([1, -2, -3, -4, 5]));
// 6
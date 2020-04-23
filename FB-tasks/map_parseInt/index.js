// JS Quiz
// What the value and why?

const a = ["10", "11", "12"];
const result = a.map(parseInt);
console.log(result);
// [ 10, NaN, 1 ]

// 1 - iteration
// value - 10, index = 0; array =["10", "11", "12"]
// parseInt(10,0) - Third argument (array) is ignored 
// parseInt(10,0) - 0 = false 
// and therefore, the function parseInt('10') considers that the second 
//argument was not  passed and by default uses - 10 -> parseInt('10',10) = 10;

//  2 - iteration
// value - 11, index = 1; array =["10", "11", "12"]
// parseInt(11,1) - Third argument (array) is ignored 
// In the base 1 system, the character '7' does not exist. As with the first iteration, the last argument is ignored. Thus parseInt () returns NaN.

// 3 - Iteration
// value - 12, index = 2; array =["10", "11", "12"]
// parseInt(12,2) - Third argument (array) is ignored
//  parseInt(12,2) = 1;
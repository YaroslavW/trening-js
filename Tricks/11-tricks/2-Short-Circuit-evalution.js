// CONDITIONALS
x > 100 ? "Above 100" : "Below 100";
x > 100 ? (x > 200 ? "Above 200" : "Between 100-200") : "Below 100";

// Using && will return the first false or ‘falsy’ value.
// If every operand evaluates to true , the last evaluated expression will be returned.
let one = 1,
  two = 2,
  three = 3;
console.log(one && two && three); // Result: 3
console.log(0 && null); // Result: 0

// Using || will return the first true or ‘truthy’ value.
//  If every operand evaluates to false , the last evaluated expression will be returned.
let one = 1,
  two = 2,
  three = 3;
console.log(one || two || three); // Result: 1
console.log(0 || null); // Result: null

// Example 1
// Let’s say we want to return the length of a variable, but we don’t know the variable type.
// We could use an if/else statement to check that foo is an acceptable type,
// but this could get pretty longwinded.
// Short circuit evaluation allows us to do this instead:
return (foo || []).length;
// If the variable foo is truthy, it will be returned.
// Otherwise, the length of the empty array will be returned: 0 .

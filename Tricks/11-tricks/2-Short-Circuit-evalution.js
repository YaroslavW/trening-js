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

// Example 2
// Let’s say we wanted to access a property called data within this.state ,
// but data is undefined until our program has successfully returned a fetch request.
if (this.state.data) {
  return this.state.data;
} else {
  return "Fetching Data";
}
// But that seems pretty repetitive. The ‘or’ operator provides a more concise solution:
return this.state.data || "Fetching Data";
// We can’t refactor the code above to use && .
// The statement 'Fetching Data' && this.state.data will return this.state.data
// whether it is undefined or not. This is because 'Fetching Data' is ‘truthy’,
// and so the && will always pass over it when it is listed first.

// A New Proposed Feature: Optional Chaining
// There is currently a proposal to allow ‘optional chaining’
// when attempting to return a property deep in a tree-like structure.
//  Under the proposal, the question mark symbol ? could be used to extract a
//  property only if it is not null .

// For example, we could refactor our example above to this.state.data?.() ,
// thus only returning data if it is not null .

// Or, if we were mainly concerned about whether state was defined or not,
// we could return this.state?.data .

// The proposal is currently at Stage 1, as an experimental feature.

console.log(
  function () {
    return [(() => this.x).bind({ x: "inner" })(), (() => this.x)()];
  }.call({ x: "outer" })
);

// [ 'outer', 'outer' ]

// Arrow functions have lexical this value. This means, they inherit this value from the context they are defined. And later it stays unchangeable, even if explicitly bound or called in a different context.
// In this case both arrow functions are created within the context of {x: 'outer'}, and .bind({ x: 'inner' }) applied on the first function doesn't make difference.
// So the answer is: ['outer', 'outer'].


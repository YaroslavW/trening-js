console.log(
  function () {
    return [(() => this.x).bind({ x: "inner" })(), (() => this.x)()];
  }.call({ x: "outer" })
);

// [ 'outer', 'outer' ]
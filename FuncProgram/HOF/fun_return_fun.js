function counterGenerator() {
  let i = 0;
  return function() {
    console.log(++i);
  };
}

const counter = counterGenerator();
counter(); // => 1
counter(); // => 2
counter(); // => 3

function * randomize() {
    while (true) {
  let random = Math.floor(Math.random()*1000);
      yield random;
    }
  }
  var random= randomize();
  
  console.log(random.next().value);
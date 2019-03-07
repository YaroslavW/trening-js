function * randomize() {
    while (true) {
  let random = Math.floor(Math.random()*1000);
      yield random;
    }}
  var random= randomize();
  while(true)
  console.log(random.next().value);

  //  do not run !!!
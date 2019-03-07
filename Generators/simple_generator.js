function* generator(e) {
    yield e + 10;
    yield e + 25;
    yield e + 33;
  }
  var generate = generator(27);
  console.log(generate.next().value); // 37
  console.log(generate.next().value); // 52
  console.log(generate.next().value); // 60
  console.log(generate.next().value); // undefined
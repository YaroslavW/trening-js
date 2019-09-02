function countFrom(a, b) {
  document.write(a + " " + b + "<br>");
  id = setInterval(function() {
    document.write(a + "<br>");
    if (a === b) {
      clearInterval(id);
    }
    a++;
  }, 1000);
}

countFrom(1, 10);

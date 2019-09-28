const arr = [10, 15, 20, 22, 5];
for (var i = 0; i < arr.lemgth; i++) {
  setTimeout(
    function(temp) {
      return function() {
        console.log("Its = " + temp);
      };
    },
    i,
    3000
  );
}

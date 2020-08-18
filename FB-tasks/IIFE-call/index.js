(function() {
  var detective = "Sherlock Holmes";
  var filter = [].filter.call(detective,
    function(element, index) {
      return index > 8;
    });
    console.log(filter)
}())
// [ 'H', 'o', 'l', 'm', 'e', 's' ]
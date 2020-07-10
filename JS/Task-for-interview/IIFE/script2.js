(function (window) {
  var MarieGreeter = {};
  MarieGreeter.name = "Мария";
  var greeting = "Здравствуйте, ";
  MarieGreeter.sayHello = function () {
    console.log(greeting + " " + MarieGreeter.name);
  };
  window.MarieGreeter = MarieGreeter;
})(window);

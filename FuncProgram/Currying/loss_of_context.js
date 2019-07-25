setTimeout(function() {
  console.log("Hello");
}, 2000);

var user = {
  name: "Jhon",
  sayHello: function() {
    console.log("Hello " + this.name);
  }
};
user.sayHello(); //Hello Jhon

setTimeout(user.sayHello, 1000); //Hello undefined

// ==========>>> 1 <<<=========

setTimeout(function() {
  user.sayHello();
}, 3000);
// Hello Jhon

var user_1 = {
  name: "Sarah",
  sayHy: function(time) {
    console.log(`Good ${time} ${this.name}`);
  }
};

setTimeout(function() {
  user_1.sayHy("Day");
}, 5000); //Good Day Sarah

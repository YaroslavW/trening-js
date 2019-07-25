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

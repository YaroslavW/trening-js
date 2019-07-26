var user = {
  name: "Yaroslav",
  sayHi: function() {
    console.log("Hello " + this.name);
  }
};

setTimeout(user.sayHi.bind(user), 1000);
// https://learn.javascript.ru/bind

// const apple = 5;
// apple = 10;
// console.log(apple);
// Uncaught TypeError: Assignment to constant variable.


const user = {
    name: "John"
  };
  
  user.name = "Sarah";
  console.log(user.name); 
//   Sarah
user = 5;
console.log(user);
// TypeError: Assignment to constant variable. 

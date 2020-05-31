var a = 10;
(()=>{
  let a = 20;
  console.log(a);
  console.log(a)
})();
// ReferenceError: Cannot access 'a' before initialization
// Ref error on 'let', let and const are not hoisted
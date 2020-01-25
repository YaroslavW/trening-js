(function(){
  console.log(typeof this)
}).call(10);

// object

// Call accepts the first parameter as `object`, so when you pass a primitive type, It creates an object for that primitive type, that's why `typeof` returning `object`.
// (function() {
// console.log(this) // this outputs as Number {10} -> which is object.
// }).call(10)
// (function() {
// console.log(this) // this outputs as String {"some string"} -> which is object.
// }).call('some string').
// Note: If you don't pass any arguments to call, it will refers to global object.
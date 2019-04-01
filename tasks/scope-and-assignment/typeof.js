(function(){
    // var a = 4;  //undefined
    // var b = 3; //undefined
    var a = b  =3;
})(); // dog balls
// console.log(typeof a, typeof b);  // undefined number 
// Because 'b' falls in the global scope.

console.log(b); // 3
console.log(a); // Error



(function () {
    // код функции 
}());


// Dog Balls
(function() {
  //body 
})();
'use strict';
// Функции-стрелки не имеют своего arguments
function f(){
    let  showArg = () => console.log( arguments[0]);
    showArg();
}
f(1); //1
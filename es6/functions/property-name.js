// function y(){};

// let u = function(){};

// let user = {
//     sayHay: function(){}
// }
// console.log(`Name first function y = ${y.name} and name second function u = ${u.name} name third function = ${user.sayHay.name}`);
//Name first function y = y and name second function u = u name third function = sayHay
'use strict';
if( true ) {
    sayHi();
    function sayHi(){
        console.log('Hi');
    }
}
sayHi();
// with 'use strict' last sayHi - ReferenceError: sayHi is not defined
// without 'use strict' - all works normal
"use strict";
exports.__esModule = true;
exports.even_or_odd = void 0;
function even_or_odd(n) {
    if (n % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
exports.even_or_odd = even_or_odd;
console.log(even_or_odd(55));
// Odd
console.log(even_or_odd(50));
// Even
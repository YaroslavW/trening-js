// =============>>> Iterator 

const string = 'abcde';
const iterator = string[Symbol.iterator]();
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
// a
// b
// c
// d
// e


// ========>>> Generator
function * iterator() {
    yield 'a';
    yield 'b';
    yield 'c';
    yield 'd';
    yield 'e';
    }
    for (let x of iterator()) {
    console.log(x);
    }
    // a
    // b
    // c
    // d
    // e
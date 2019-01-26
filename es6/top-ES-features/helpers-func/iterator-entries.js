let people = ['jamie', 'jack', 'isaac'];
let someEntries = people.entries();
console.log(someEntries.next().value); // [0, 'jamie']
console.log(someEntries.next().value); // [1, 'jack']
console.log(someEntries.next().value); // [2, 'isaac']


let iterator = people.entries();
for ( let i of iterator ) {
    console.log( i );
}
// [ 0, 'jamie' ]
// [ 1, 'jack' ]
// [ 2, 'isaac' ]
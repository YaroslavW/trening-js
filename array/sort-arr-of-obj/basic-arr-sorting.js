const foo = [8, 3, 5, 'whistle', 'fish'];
console.log(foo.sort()); // returns [3, 5, 8, 'fish', 'whistle']

const bar = [4, 19, 30, function () { }, { key: 'value' }];
console.log(bar.sort()); // returns [ 19, 30, 4, { key: 'value' }, [Function] ]
// 30 comes before 4. ==>> "30" comes before "4" 

//  Array.sort actually changes, or mutates the array it sorts
const baz = ['hello world', 31, 5, 9, 12];
baz.sort(); // baz array is modified
console.log(baz); // shows [12, 31, 5, 9, "hello world"]

// To avoid this, you can create a new instance of the array to be sorted and modify that instead.
const baz1 = ['hello world', 31, 5, 9, 12];
const newBaz = [...baz1].sort(); // new instance of baz array is created and sorted
console.log(baz1); // "hello world", 31, 5, 9, 12]
console.log(newBaz); // [12, 31, 5, 9, "hello world"]
// Note the use of the spread operator to create a new instance of baz.
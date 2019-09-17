// If you want to remove values from the end of an array destructively,
// there’s are faster alternatives than using splice() .

// For example, if you know the size of your original array, you can re-define
//  its length property, like so:

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.length = 4;
console.log(array); // Result: [0, 1, 2, 3]

// This is a particularly concise solution. However, I have found the run-time of the slice()
//  method to be even faster. If speed is your main goal, consider using something like this:

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array = array.slice(0, 4);
console.log(array); // Result: [0, 1, 2, 3]

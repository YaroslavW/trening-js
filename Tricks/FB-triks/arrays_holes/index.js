const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
// [ 1, 2, 3, <7 empty items>, 11 ]
// Adding elements with high indexes can create undefined "holes" in an array!

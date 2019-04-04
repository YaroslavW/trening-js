const array = [1, 2, 3, 4];

array.forEach(function (element) {
    if (element === 2)
        continue;

    console.log(element);
});

// expect ->the code below to skip printing 2 to the console and only show 1 3 4 ?
// Output: Uncaught SyntaxError: Illegal continue statement: no surrounding iteration statement


// for this you must use for loop

for (let i = 0; i < array.length; i++) {
    if (array[i] === 2)
        continue;

    console.log(array[i]);
}

// Output: 1 3 4
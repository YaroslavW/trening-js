const array = [1, 2, 3, 4];

array.forEach(function (element) {
    console.log(element);

    if (element === 2)
        break;
});

// Output: Uncaught SyntaxError: Illegal break statement




const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    if (array[i] === 2)
        break;
}

// Output: 1 2
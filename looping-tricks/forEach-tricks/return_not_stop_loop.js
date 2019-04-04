// array = [1, 2, 3, 4];

// array.forEach(function (element) {
//     console.log(element);

//     if (element === 2)
//         return;

// });

// Output: 1 2 3 4

const array = [1, 2, 3, 4];

const callback = function (element) {
    console.log(element);

    if (element === 2)
        return; // would this make a difference? no.
}

for (let i = 0; i < array.length; i++) {
    callback(array[i]);
}

// Output: 1 2 3 4
const bands = [
    { genre: 'Rap', band: 'Migos', albums: 2 },
    { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13 },
    { genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
];

// function for dynamic sorting
function compareValues(key, order = 'asc') {
    return function (a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string') ?
            a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
            b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

// array is sorted by band, in ascending order by default
let sortBand = bands.sort(compareValues("band"));
console.log(sortBand);
// [{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 },
//     { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13 },
//     { genre: 'Rap', band: 'Migos', albums: 2 }]

// array is sorted by band in descending order
let sortDesc = bands.sort(compareValues('band', 'desc'));
console.log(sortDesc);
// [{ genre: 'Rap', band: 'Migos', albums: 2 },
//     { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13 },
//     { genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }]

// array is sorted by albums in ascending order
let sortAlb = bands.sort(compareValues('albums'));
console.log(sortAlb);
// [{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 },
//     { genre: 'Rap', band: 'Migos', albums: 2 },
//     { genre: 'Pop', band: 'Coldplay', albums: 4, awards: 13 }]
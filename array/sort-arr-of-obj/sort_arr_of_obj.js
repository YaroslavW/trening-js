const bands = [
    { genre: 'Rap', band: 'Migos', albums: 2 },
    { genre: 'Pop', band: 'Coldplay', albums: 4 },
    { genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
];

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const genreA = a.genre.toUpperCase();
    const genreB = b.genre.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
        comparison = 1;
    } else if (genreA < genreB) {
        comparison = -1;
    }
    return comparison;
}

let sortArrOfObj = bands.sort(compare);
console.log(sortArrOfObj);
/* returns [
{ genre: 'Pop', band: 'Coldplay', albums: 4 },
{ genre: 'Rap', band: 'Migos', albums: 2 },
{ genre: 'Rock', band: 'Breaking Benjamins', albums: 1 }
] */

// ======>>>To reverse the sorting order, you can simply invert the return value of the compare function:
// function compare(a, b) {
//   ...

//     //invert return value by multiplying by -1
//     return comparison * -1;
// }
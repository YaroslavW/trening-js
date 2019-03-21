const arr = [1, 2, 30, 4];

function compare(a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
// (a > b) ? 1 : -1
    return 0;
}
// ===>> or This
function compare(a, b) {
    return a - b;
}
// ===>>> or even so
arr.sort((a, b) => a - b);

let arrSort = arr.sort(compare);
console.log(arrSort);
// => 1, 2, 4, 30
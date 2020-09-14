let arr_1 = [3, 5, 7],
    arr_2 = [2, 5, 8];

const res = arr_1.filter(num => arr_2.includes(num));

console.log(res); //[5]
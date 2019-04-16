let oldExp = Math.pow(2, 3)
let newExp = 2 ** 3;
console.log(`oldExp = ${oldExp}; newExp = ${newExp}`);
// oldExp = 8; newExp = 8

// До ES7 у нас был короткий способ возведения в степень 
// только для числа 2 с помощью побитового оператора левого сдвига <<:
// Эти выражения эквивалентны

Math.pow(2, n);
2 << (n - 1);
2 ** n;
// Напишите функцию repeatStr(str, n), которая вовращает строку повторяемую определённое количество раз

function repeatStr(str, n) {
    var new_str = '';
    while (n-- > 0) new_str += str;
    return new_str;
}

console.log(repeatStr('Hello!', 3)); // Hello!Hello!Hello!
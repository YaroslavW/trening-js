// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function zeros(num, len, sign) {
  let len_zer = len - (num + "").length, // к-во нулей
    num_zer = "";
  for (; len_zer > 0; len_zer--) {
    num_zer += 0;
  }

  return sign === undefined || sign === ""
    ? num_zer + num + ""
    : sign + num_zer + num + "";
}

console.log(zeros(145, 5, "-")); // -00145
console.log(zeros(33, 4, "+")); // +0033
console.log(zeros(33, 4)); // 0033

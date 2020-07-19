var a = /Иван/; // шаблон регулярного выражения
var str1 = "Кузьмин Иван Федорович"; // строка, в которой осуществляется поиск
var str2 = "Петров Петр Петрович"; // строка, в которой осуществляется поиск

if (str1.search(a) == -1) console.log("не найдено");
else console.log("найдено"); // будет найдено

if (str2.search(a) == -1) console.log("не найдено");
// будет не найдено
else console.log("найдено");

const a_1 = /Yaroslav/;
const str_1 = "Kolesnikov Yaroslav";
const str_2 = "Kolesnikov Jaroslav";

const ans_1 = str_1.search(a_1) === -1 ? "No" : "Yes";
console.log(ans_1);
// Yes
const ans_2 = str_2.search(a_1) === -1 ? "no" : " yes";
console.log(ans_2);
// no

// constructor

const b = new RegExp("John");

const str_b = "John Wells";
const str_b_1 = "Jaims Bimm";

console.log(str_b.search(b) === -1 ? "John" : "Bimm");
console.log(str_b_1.search(b) === -1 ? "John" : "Bimm");

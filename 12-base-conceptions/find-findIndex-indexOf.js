

// ====>>> find
// find по одному перебирает элементы и возвращает первый из них, 
// для которого функция возвращает true.После этого поиск останавливается.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = arr.find(el => el > 5);

console.log(found); // 6


// =====>>> findIndex
// findIndex – это очень похожий метод, только возвращает он не сам элемент,
//  а его индекс.Для примера возьмем массив строковых значений, чтобы было яснее.

const arr_1 = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndex = arr_1.findIndex(el => el === 'Frank');

console.log(foundIndex); // 1


// ======>>> indexOf
// indexOf – это упрощенный findIndex.Вместо функции он принимает простое значение
//  и сравнивает с ним каждый элемент массива.
const arr_2 = ['Nick', 'Frank', 'Joe', 'Frank'];
const foundIndexOf = arr_2.indexOf('Frank');

console.log(foundIndexOf);
// 1
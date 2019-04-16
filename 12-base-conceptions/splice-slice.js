let arr = ["a", "c", "d", "e"];
let result = arr.splice(1, 2, "b1", "b2", "b3");
console.log(arr); // [ 'a', 'b1', 'b2', 'b3', 'e' ]
console.log(result); // [ 'c', 'd' ]

// Первый аргумент устанавливает позицию, с которой начинается работа.
// Второй – число удаляемых элементов.
// Третий и дальше – элементы, которые нужно добавить.


let arr_1 = ['a', 'b', 'c', 'd', 'e'];
const sliced = arr_1.slice(2, 4);

console.log(sliced);
// ['c', 'd']

console.log(arr_1);
// ['a', 'b', 'c', 'd', 'e']

// slice, напротив, не меняет массив, а копирует его.
// Первым аргументом можно указать начальную позицию для копирования,
//  а вторым – конечную.Копия получается неглубокая,
//   то есть все объекты будут переданы в новый массив по ссылке
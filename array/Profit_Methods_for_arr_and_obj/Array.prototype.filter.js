// Создадим на основе массива, содержащего сведения о студентах,
//  новый массив, в который попадут записи только о тех студентах, 
// возраст которых позволяет им  служить в армии

const studentsAge = [17, 16, 18, 19, 21, 17];
const ableToDrink = studentsAge.filter(age => age > 18);
// Массив ableToDrink будет содержать два значения: [19, 21]

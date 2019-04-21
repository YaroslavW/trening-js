console.log(JSON.stringify({ alpha: 'A', beta: 'B' }, null, '\t'));
// '{
//     "alpha": A,
//     "beta": B
// }'

// stringify() может принимать два необязательных параметра(кроме первого – собственно объекта для сериализации):

// replacer – функция для преобразования значений и свойств или массив тех свойств, которые должны войти в сериализованный объект.
//   space – число, определяющее количество пробелов перед каждым уровнем вложенности, или строка, которая будет вставлена перед каждым уровнем, например, "\t"
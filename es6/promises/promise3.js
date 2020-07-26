// function doSomethingOldStyle(success, failure) {
//   if (Math.random() > 0.5) {
//     return success("Успех");
//   } else {
//     return failure("Ошибка");
//   }
// }

function success(res) {
  console.log("Успешно завершено с результатом -" + res);
}
function failure(err) {
  console.log("Завершено с ошибкой - " + err);
}

// doSomethingOldStyle(success, failure);
// Успешно завершено с результатом -Успех

function doSomething() {
  return new Promise((res, rej) => {
    console.log("Готово!");
    if (Math.random() > 0.5) {
      res("Успех");
    } else {
      rej(" Ошибка");
    }
  });
}

const promise = doSomething();
promise.then(success, failure);
// Готово!
// Завершено с ошибкой -  Ошибка

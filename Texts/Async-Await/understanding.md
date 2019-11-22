# Понимание асинхронного JavaScript с помощью Async / Await

![logo Asinc/Await](img/logo-understanding-asinc-await.jpg)

`Async / await` - это относительно новый способ написания асинхронного кода на Javascript.

Почему `async / await`? Ну, проще говоря, `async / await` позволяет нам писать асинхронный код синхронно.

Содержание:

[Async functions](#Async-functions)

[Await](#Await)

[Error handling](#Error-handling)

[Fun facts](#Fun-facts)

[Заключение.](#Заключение)

## Async functions

Чтобы создать асинхронную функцию, все, что нам нужно посто добавить ключевое слово `async` перед определением функции, например так:

```js
async function asyncFunc() {
  return "Hey!";
}
```

Единственное, что вам нужно знать об асинхронных функциях, это то, что **они всегда возвращают обещание - `promise`**.

В случае, когда мы явно возвращаем что-то, что не является обещанием, как выше, возвращаемое значение автоматически оборачивается в разрешенное обещание ( resolved promise ) с разрешенным значением (resolved value), которое не является обещанием. Для приведенного выше кода `asyncFunc().then(result => console.log("result"))` вернет строку `"Hey !"`.

## Await

Ключевое слово `await` **может использоваться только внутри асинхронного блока**, иначе оно выдаст синтаксическую ошибку. Это означает, что вы не можете использовать `await` на верхнем уровне нашего кода, по сути, **не используйте его отдельно**.

**Когда мы используем `await`?** Если у нас есть асинхронная функция внутри асинхронного блока. Допустим, нам нужно извлечь некоторые данные с нашего сервера, а затем использовать эти данные в нашем асинхронном блоке. Мы будем использовать `await`, чтобы приостановить выполнение функции и возобновить работу после поступления данных. Например:

```js
async function asyncFunc() {
  // fetch data from a url endpoint
  const data = await axios.get("/some_url_endpoint");
  return data;
}
```

**Зачем использовать `await`?** Вместо использования `await` мы могли бы просто использовать обещание - `Promise`, верно?

```js
async function asyncFunc() {
  let data;
  // fetch data from a url endpoint
  axios.get("/some_url_endpoint").then(result => {
    data = result;
  });
  return data;
}
```

`Await` - это просто более элегантный способ написать обещание в асинхронной функции. Это значительно улучшает читабельность и, следовательно, причину, по которой мы его используем.

Давайте предположим, что у нас есть пара асинхронных функций в нашем асинхронном блоке. Вместо цепочки обещаний мы могли бы сделать это, что намного чище:

```js
async function asyncFunc() {
  // fetch data from a url endpoint
  const response = await axios.get("/some_url_endpoint");
  const data = await response.json();

  return data;
}
```

## Error handling

Обработка ошибок
Как мы обрабатываем ошибки? У нас есть несколько вариантов, давайте рассмотрим их:

### `Try..catch`

Это наиболее распространенный способ обработки ошибок при использовании `async-await`, старого доброго `try-catch`. Все, что вам нужно сделать, это инкапсулировать ваш код в блок `try` и обрабатывать любые ошибки, возникающие в перехвате - `catch`.

```js
async function asyncFunc() {
  try {
    // fetch data from a url endpoint
    const data = await axios.get("/some_url_endpoint");
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}
```

Если при извлечении данных из нашей конечной точки (endpoint) возникает ошибка, выполнение передается в блок `catch`, и мы можем обработать любую ошибку, которая была выдана. Если у нас есть несколько ожидающих `await`-строк, блок `catch` перехватывает ошибки, возникающие во всех строках.

```js
async function asyncFunc() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get("/some_url_endpoint");
    const data = await response.json();

    return data;
  } catch (error) {
    alert(error); // catches both errors
  }
}
```

### `If` not `try..catch`

В качестве альтернативы мы можем добавить `.catch ()` к обещанию, созданному асинхронной функцией. Напомним: помните, что асинхронная `async`- функция возвращает обещание. Если возникает ошибка, то она возвращает отклоненное обещание ( [rejected promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject) ). Так что при вызове функции мы можем сделать это:

```js
asyncFunc().catch(error => {
  // handle error appropriately
});
```

## Fun facts

### Асинхронизация методов класса

Методы класса могут быть асинхронными - `async`.

```js
class Example {
  async asyncMethod() {
    const data = await axios.get("/some_url_endpoint");
    return data;
  }
}
```

Для вызова метода мы бы сделали:

```js
  const exampleClass = new Example();
  exampleClass.asyncMethod().then(//do whatever you want with the result)
```

### В `await` можно использовать `.then`

Мы можем добавить `.then ()` в `await`

```js
async function asyncFunc() {
  // fetch data from a url endpoint
  const data = await axios.get("/some_url_endpoint")
    .then((result) => return result.names)

  return data;
}
```

### Await <> Promise.all

Если у нас есть несколько обещаний, мы можем использовать `Promise.all` с `await`.

```js
async function asyncFunc() {
  const response = Promise.all([
    axios.get("/some_url_endpoint"),
    axios.get("/some_url_endpoint")
  ]);
  ...
}
```

---

## Заключение

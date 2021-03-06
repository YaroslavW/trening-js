# Сборка аутентификации JWT с Node.js

![logo Node authentification](img/logo.jpg)

**В этом обзоре мы рассмотрим токены Node.js и JSON. Мы покажем вам, как создать маршрут для создания токена и использовать этот токен для отправки запроса на защищенный маршрут.**

Задумывались ли вы, как работает аутентификация? Что стоит за всей сложностью и абстракциями. На самом деле ничего особенного. Это способ шифрования значения, в свою очередь создание уникального токена, который пользователи используют в качестве идентификатора. Этот токен подтверждает вашу личность. Он может проверять, кто вы, и авторизовать различные ресурсы, к которым у вас есть доступ. Если вы случайно не знаете ни одного из этих ключевых слов, наберитесь терпения, я объясню все ниже.

Node js JWT Руководство по аутентификации - это тема, которую мы обсудим сегодня. Полная форма JWT - JSON Web Token. Если мы хотим создать безопасное веб-приложение, мы должны реализовать аутентификацию. После этого нам нужно построить Авторизацию. Существует два типа аутентификации, которые вы можете использовать в любой разработке веб-приложений.

1. - Session-based Authentication (Сеансовая аутентификация)

2. - Token-based Authentication (Аутентификация на основе токенов)

## Почему мы используем аутентификацию на основе токенов.

Аутентификация на основе сеансов - это хорошо, тогда почему мы хотим использовать аутентификацию на основе токенов? Причины следующие.

1. Основная причина в том, что это Аутентификация без сохранения состояния. Этот токен хранится в локальном хранилище на стороне клиента, но также может храниться в хранилище сеансов (session storage) или в файле cookie.

2. В большинстве случаев это одностраничные приложения, веб-API и Интернет вещей (IoT).

3. Если наше приложение масштабируемо и самостоятельное (отделено от других), то это лучший выбор для использования этого фактического стандарта.

4. Это может быть мобильное приложение или веб-приложение, подготовленное независимо от того, какие технологии вы используете для создания веб-приложения или мобильного приложения.

## Как работает JWT?

> Посмотрие мой перевод статьи ["Простое введение в основы JWT."](https://github.com/YaroslavW/trening-js/blob/master/Texts/JWT-Basics/simple_intro_to_jwt_basics.md)

![JWT Base](img/image-jwt-node-1.jpg)

JSON Web Token - это токен; нам нужно поставить заголовок в каждом запросе для проверки клиента. Архитектура аутентификации JWT чертовски проста.

1. Первая попытка пользователя войти под своими учетными данными.

2. После проверки учетных данных сервер отправляет веб-токен JSON клиенту.

3. Затем клиент сохраняет этот токен в локальном хранилище или любом другом механизме хранения.

4. Опять же, если клиент хочет запросить защищенный маршрут или ресурс, он отправляет JWT в заголовке запроса.

5. Сервер проверяет, что JWT и, если он верен, возвращает ответ 200 с информацией, необходимой клиенту.

6. Если JWT недействителен, то он дает несанкционированный доступ или любое другое ограниченное сообщение.

## Node.js Аутентификация c JWT.

В этом уроке мы не используем интерфейсную среду. Мы будем использовать POSTMAN для запроса сервера. Мы проверим аутентификацию с помощью токена. Итак, давайте начнем.

### Шаг 1: Установите зависимости Node.js

Создайте папку проекта и перейдите в эту папку. Введите следующую команду.

```javascript
npm init
```

Теперь установите следующие зависимости.

```javascript
npm install express jsonwebtoken mongoose body-parser --save
```

Он установит `express`-фреймворк, пакет `jsonwebtoken` для аутентификации пользователя, модель схемы `mongoose` и промежуточное программное обеспечение `body-parser`.

Также нам нужно установить сервер разработки `nodemon`, чтобы предотвратить остановку и перезапуск процесса сервера. Итак, давайте сделаем это в первую очередь.

```javascript
npm install nodemon --save-dev
```

Остальные зависимости мы установим по мере роста нашего проекта.

### Шаг 2: Настройте Node Server.

В файле `package.json` измените этот объект на следующий.

```javascript
"scripts": {
    "start": "nodemon server"
},
```

Поэтому в терминале, когда мы набираем команду `npm start`, мы запускаем файл `server.js`. В корневой папке - `src`, создайте один файл с именем `server.js`. Настройте Node server.

```javascript
// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, function() {
  console.log("Server is running on Port", PORT);
});
```

Теперь перейдите к терминалу и пропишите следующую инструкцию.

```javascript
npm start
```

Запустится сервер, вы можете увидеть это на консоли. Так что он готов принять любой запрос, будь то веб или API.

### Шаг 3: Отправить запрос на Node-Server через Postman.

Сначала мы определяем один маршрут (route) и отправляем JSON ответ клиенту.

```javascript
// server.js

app.get("/checking", function(req, res) {
  res.json({
    Tutorial: "Welcome to the Node express JWT Tutorial"
  });
});
```

Откройте Postman и отправьте `get` - запрос на `http://localhost:3000/checking`

![get-request with Postman](img/image-jwt-node-2.jpg)

### Шаг 4: Настройте базу данных MongoDB.

Напишите следующий код, чтобы подключить приложение Node.js к базе данных MongoDB.

```javascript
// server.js

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jwtauth");
```

Кроме того, напишите в приложение промежуточное ПО для `body-parser`.

```javascript
// server.js

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

### Шаг 5: Создайте модель пользователя.

Создайте одну новую папку внутри корневого каталога с именем `models`. Для этого создайте один файл с именем `user.model.js`

```javascript
// user.model.js

const mongoose = require("mongoose");

const user = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", user);
```

Мы определили схему для коллекции `User`.

### Шаг 6: Создайте маршруты для пользователей.

В корне сделайте одну папку под названием `routes` - маршруты. В этой папке создайте один файл с именем `user.route.js`. Теперь нам нужно зарегистрировать пользователя для нашего приложения. Итак, давайте определим почтовый маршрут для регистрации пользователя. Нам также нужен модуль `bcrypt` для хеширования пароля. Мы не можем хранить простой пароль. Итак, давайте сначала установим модуль `bcrypt`.

```javascript
npm install bcrypt --save
```

Затем запишите следующий код в файл `user.route.js`.

```javascript
// user.route.js

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

router.post("/signup", function(req, res) {
  bcrypt.hash(req.body.password, 10, function(err, hash) {
    if (err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: hash
      });
      user
        .save()
        .then(function(result) {
          console.log(result);
          res.status(200).json({
            success: "New user has been created"
          });
        })
        .catch(error => {
          res.status(500).json({
            error: err
          });
        });
    }
  });
});

module.exports = router;
```

Он пытается хэшировать свойство пароля входящего запроса. Если это не удается сделать, возвращает ответ с ошибкой в формате `json`. В случае успеха он создаст нового пользователя и добавит его в базу данных MongoDB. Теперь включите этот файл `user.route.js` в файл `server.js`. Я пишу весь файл сейчас.

```javascript
// server.js

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const user = require("./routes/user.route");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/jwtauth");

const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/checking", function(req, res) {
  res.json({
    Tutorial: "Welcome to the Node express JWT Tutorial"
  });
});

app.use("/user", user);

app.listen(PORT, function() {
  console.log("Server is running on Port", PORT);
});
```

### Шаг 7: Отправить запрос на почту c Postman.

Откройте Postman, отправьте запрос в формате строки - `string` с типом приложения `json (application / json)`.

![postman запрос](img/image-jwt-node-3.jpg)

Вы можете видеть здесь, я успешно создал пользователя. Теперь я использую Studio 3T для MongoDB. Итак, вот недавно созданный пользователь в базе данных.

![MongoDB созданный пользователь](img/image-jwt-node-4.jpg)

### Вход в систему.

Перейдите в файл `user.route.js` и определите маршрут входа.

```javascript
// user.route.js

router.post("/signin", function(req, res) {
  User.findOne({ email: req.body.email })
    .exec()
    .then(function(user) {
      bcrypt.compare(req.body.password, user.password, function(err, result) {
        if (err) {
          return res.status(401).json({
            failed: "Unauthorized Access"
          });
        }
        if (result) {
          return res.status(200).json({
            success: "Welcome to the JWT Auth"
          });
        }
        return res.status(401).json({
          failed: "Unauthorized Access"
        });
      });
    })
    .catch(error => {
      res.status(500).json({
        error: error
      });
    });
});
```

Сначала я проверил, существует ли электронная почта пользователя или нет. Если нет, верните `401` несанкционированный доступ - `"Unauthorized Access"`. Если есть электронная почта, тогда проверьте пароль с помощью `bcrypted` базы данных, если совпадение найдено, и `Welcome to the JWT Auth`, иначе `401` несанкционированный доступ - `"Unauthorized Access"`.

![Авторизация](img/image-jwt-node-5.jpg)

Если попытка аутентификации не удалась, мы получим следующую ошибку.

![Ошибка авторизации](img/image-jwt-node-6.jpg)

### Шаг 9: Верните JWT, если попытка авторизации прошла успешно.

Если адрес электронной почты и пароль пользователя верны, то в ответ нам нужно вернуть токен JWT. Итак, давайте сгенерируем токен и вернемся к пользователю.

```javascript
// user.route.js

const jwt = require("jsonwebtoken");

if (result) {
  const JWTToken = jwt.sign(
    {
      email: user.email,
      _id: user._id
    },
    "secret",
    {
      expiresIn: "2h"
    }
  );
  return res.status(200).json({
    success: "Welcome to the JWT Auth",
    token: JWTToken
  });
}
```

Формат токена JWT следующий.

### **HEADER: ALGORITHM & TOKEN TYPE**

```javascript
{
“alg”: “HS256”,
“typ”: “JWT”
}
```

### **PAYLOAD:DATA**

```javascript
{
“email”: “quaytayx3@gmail.com”,
“_id”: “5a7c9bd8fc3e501c94aa6035”,
“iat”: 1518120124,
“exp”: 1518127324
}
```

### **VERIFY SIGNATURE**

```javascript
HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
```

Таким образом, мы предоставляем комбинацию заголовка - `header`, полезной нагрузки - `payload` и секретного ключа -`verify signature`. Помните, вам нужно определить свой секретный ключ в файле переменных среды. Я только что показал здесь для демонстрационной цели. Таким образом, он выдаст следующий токен JWT.

```javascript
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJlbWFpbCI6ImtydW5hbGxhdGhpeWExMEBnbWFpbC5jb20iLCJfaWQiOiI1YTdjOWJkOGZjM2U1MDFjOTRhYTYwMzUiLCJpYXQiOjE1MTgxMjAxMjQsImV4cCI6MTUxODEyNzMyNH0
  ._6qVGQV_KYlonawnaTHG -
  OhOJLV4tgD -
  Eob5iRz89AM;
```

![JWT Token](img/image-jwt-node-7.jpg)

Теперь используйте этот токен для доступа к защищенным ресурсам вашего приложения, и мы закончили. Вот так вы можете сгенерировать токен аутентификации JWT.

Наконец, наш учебник по аутентификации Node js JWT с нуля завершен.

Оригинал статьи автора - [Dylan North](https://morioh.com/p/195af0fa58b8)

Автор перевода: [Yaroslav Kolesnikov](http://abcinblog.blogspot.com/)

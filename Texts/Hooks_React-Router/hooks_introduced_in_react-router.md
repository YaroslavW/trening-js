# Hooks, представленные в React-Router v5.1

![logo-image](img/logo.jpg)

Я всегда интересуюсь, когда выходит новая версия моих самых любимых библиотек / фреймворков / языков. Примерно в 18:00 вчера, просматривая твиттер, я увидел, что была выпущена новая версия react-router, поэтому я пошел искать ее и react-router команда добавила несколько действительно хороших новых API и функций.

React-router команда добавила к текущим хукам React, нвые, выпустив некоторые API хуков в своей версии 5.1 ( `useParams`, `useLocation`, `useHistory` и `useRouteMatch` ). Эти хуки дают нам новые способы управления состоянием маршрутизатора. Помимо хуков, добавленных в v5.1, теперь есть поддержка `forwardRef` в `<Link>`, и они вновь представили возможность передавать функции в поддержку `<Link>` и `<NavLink>`.

Я расскажу, как работают эти хуки и как они меняют способ написания наших маршрутов.

## useParams.

Этот хук дает нам доступ к параметрам этого конкретного маршрута. `params` - это параметры, значения которых динамически устанавливаются в URL. Обычно способ, которым мы обращаемся к параметрам в предыдущих версиях react-router, был через соответствующие реквизиты- `props`, переданные компоненту.

```javascript
// <= V5.0

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Portfolio = props => {
  const { match } = props;

  let id = match.params;
  return (
    <div>
      Portfolio component
      <p>Url params: {id}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/portfolio/6">Portfolio</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio/:id" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
```

Выше представлен подход, который мы использовали для доступа к параметрам URL в предыдущих версиях react-router. Но с введением хука `useParams` все пользователи могут получить доступ к параметрам из хука.

```javascript
// > V5.1
import { useParams } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Portfolio = () => {
  let { id } = useParams();
  return (
    <div>
      Portfolio component
      <p>Topic: {id}</p>
    </div>
  );
};
```

## useLocation.

Это еще один хук, выпущенный в v5.1. Если вы часто используете react-router, я предполагаю, что вы использовали объект `location` либо для получения свойства `pathname`, либо для свойства `state`. Я обычно пропускаю состояние через ссылку react-router, поэтому думаю, что я буду делать рефакторинг своих компонентов, чтобы использовать ловушку `useLocation`. Это, вероятно, будет моей первой react hook в продакшене.

> Примечание. Передача состояния через <Link> react-router не является новой функцией, она существует с тех пор, как я начал использовать React.

```javascript
// > V5.1
import { useLocation } from "react-router";

const Settings = () => {
  let location = useLocation();
  console.log(location);
  return <div>settings component</div>;
};

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link
              to={{
                pathname: "/settings",
                state: {
                  fromNavBar: true
                }
              }}
            >
              Settings
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          //
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </div>
  );
}

// console
// {
//   "pathname": "/settings",
//   "state": {
//     "fromNavBar": true
//   },
//   "search": "",
//   "hash": "",
//   "key": "x8vmq3"
// }
```

Хук `useLocation` возвращает объект местоположения, который содержит `pathname`, `search`, `hash`, `key` и свойства состояния `state` текущей локации.

## useHistory.

`useHistory` дает нам доступ к объекту истории - `history object`, который помогает нам программно перемещаться или изменять маршруты.

```javascript
// > V5.1
import { useHistory } from "react-router-dom";

export const Profile = () => {
  let history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <button onClick={() => history.push("/")}>Home</button>
      <section>
        <p>profile page</p>
      </section>
    </div>
  );
};
```

`history object` также возвращает объект `location object` как одно из его свойств, но рекомендуется не использовать возвращаемое им местоположение, потому что `history` является изменяемой [ history is mutable](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md#history-is-mutable), поэтому используйте для этого хук `useLocation`.

## useRouteMatch.

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

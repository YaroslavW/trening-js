# useThrottledFn

Принимает функцию и возвращает новую запомненную версию этой функции, которая ожидает определенное время
перед разрешением следующего выполнения.
Если время не определено, его значение по умолчанию будет 100 мс.

### 💡 Зачем?

- Чтобы контролировать, сколько раз мы разрешаем выполнение функции с течением времени, независимо от количества визуализаций компонента

- когда мы прикрепляем слушателей к событию DOM.

### Основное использование

```jsx harmony
import { useEffect, useState } from "react";
import { useWindowResize, useThrottledFn } from "beautiful-react-hooks";

const ThrottledFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // there's no need to use `useCallback` since the returned function
  // is already memoized
  const onWindowResizeHandler = useThrottledFn(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 250);

  useWindowResize(onWindowResizeHandler);
  useEffect(() => {
    // do something
    // don't forget to cancel debounced
    return () => onWindowResizeHandler.cancel(); // or .flush()
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent />;
```

### Параметры:

Поскольку `useThrottleFn` использует [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
под капотом вы можете определить несколько параметров для настройки его поведения.

```jsx harmony
import { useState } from "react";
import { useWindowResize, useThrottledFn } from "beautiful-react-hooks";

const ThrottledFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const options = {
    leading: false,
    trailing: true
  };

  // there's no need to use `useCallback` since the returned function
  // is already memoized
  const onWindowResizeHandler = useThrottledFn(
    () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    },
    500,
    options
  );

  useWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent />;
```

## Зависимости:

Поскольку `useThrottleFn` использует [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
под капотом вы можете определить зависимости обратного вызова.

```jsx harmony
import { useState } from "react";
import { useWindowResize, useThrottledFn } from "beautiful-react-hooks";

const ThrottledFnComponent = props => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // there's no need to use `useCallback` since the returned function
  // is already memoized
  const onWindowResizeHandler = useThrottledFn(
    () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    },
    500,
    null,
    [props.foo]
  );

  useWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent foo="bar" />;
```

#### Совет:

Для глубокого понимания различий между `throttle` и`debounce`, что они из себя представляют и когда использовать эти функции
пожалуйста, прочитайте "[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)"
by [David Corbacho](https://twitter.com/dcorbacho)

### Овладение хуками

#### ✅ Когда использовать

- Когда нужно контролировать, сколько раз мы разрешаем выполнение функции с течением времени

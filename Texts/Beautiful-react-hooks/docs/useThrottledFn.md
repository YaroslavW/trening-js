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

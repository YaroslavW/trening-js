# useDebounceFn

Принимает `func` и возвращает новую запомненную версию этой функции, которая задерживает вызов`func` до определенного
время, прошедшее с того момента, когда последний раз вызывалась функция debounce.

Если время не определено, его значение по умолчанию будет 100 мс.

### 💡 Зачем?

- Чтобы контролировать, сколько раз мы разрешаем выполнение функции с течением времени, независимо от количества визуализаций компонента
  выполняет
- когда мы прикрепляем слушателей к событию DOM.

### Основное использование

```jsx harmony
import { useEffect, useState } from "react";
import { Paragraph } from "beautiful-react-ui";
import { useWindowResize, useDebouncedFn } from "beautiful-react-hooks";

const DebouncedFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // there's no need to use `useCallback` since the returned function
  // is already memoized
  const onWindowResizeHandler = useDebouncedFn(() => {
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
      <Paragraph>
        window width: <strong>{width}</strong>
      </Paragraph>
      <Paragraph>
        window height: <strong>{height}</strong>
      </Paragraph>
    </DisplayDemo>
  );
};

<DebouncedFnComponent />;
```

### Параметры

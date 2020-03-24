# useWindowResize

Принимает функцию, которая будет выполняться во время события изменения размера окна.

Он построен поверх [useGlobalEvent] (./ useGlobalEvent.md).

### 💡 Зачем?

- заботится о добавлении слушателя для события изменения размера окна.
- заботится об удалении слушателя, когда компонент будет размонтирован

### Основное использование

```jsx harmony
import { useState } from "react";
import { useWindowResize } from "beautiful-react-hooks";

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useWindowResize(event => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />;
```

### Callback setter синтакис:

Если первый параметр не указан, возвращаемую функцию (_установщик обработчика_ - handler setter) можно использовать для
установки обработчика `useWindowResize`, если он вызывается немедленно.

**Обратите внимание**: возвращаемый установщик обработчика (handler setter) предназначен только для изменения значения ссылки обратного вызова, он не
причина повторного рендеринга компонента также не должна вызываться асинхронно.

```jsx harmony
import { useState } from "react";
import { useWindowResize } from "beautiful-react-hooks";

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />;
```
#### ✅ Совет:


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

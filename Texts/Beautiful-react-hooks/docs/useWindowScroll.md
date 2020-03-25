# useWindowScroll

Принимает функцию, выполняемую во время события прокрутки окна.

Он построен поверх [useGlobalEvent](./ useGlobalEvent.md).

### 💡 Зачем?

- заботится о добавлении слушателя для события прокрутки окна.
- заботится об удалении слушателя, когда компонент будет размонтирован (component will unmount).

### Основное использование

```jsx harmony
import { useState } from "react";
import { useWindowScroll } from "beautiful-react-hooks";

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useWindowScroll(event => {
    setScrollY(window.scrollY);
  });

  return (
    <DisplayDemo>
      <p>window y-scroll: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowScrollReporter />;
```

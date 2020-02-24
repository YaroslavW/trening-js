# useGlobalEvent

Принимает имя события, которое будет прикреплено к глобальному объекту окна, затем возвращает установщик обработчика
для этого события.

### 💡 Зачем?

- заботится о добавлении слушателя для данного события в объект окна
- заботится об удалении слушателя, когда компонент будет размонтирован (component will unmount)

### Основное использование

`useGlobalEvent` возвращает установщик обработчика (handler setter) для определенного события, которое будет немедленно вызвано.

**Пожалуйста, обратите внимание**: установщик обработчика (handler setter) предназначен только для изменения ссылки на обратный вызов, он не вызывает компонент
повторно или не вызываться асинхронно.

```jsx harmony
import { useState } from "react";
import { useGlobalEvent } from "beautiful-react-hooks";

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent("resize");

  onWindowResize(event => {
    setWindowWidth(window.innerWidth);
  });

  return <DisplayDemo>Current window width: {windowWidth}</DisplayDemo>;
};

<TestComponent />;
```

### Параметры:

Поскольку `useGlobalEvent` использует [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
под капотом можно указать характеристики слушателя, передав объект параметров в качестве второго параметра.

```jsx harmony
import { useState } from "react";
import { useGlobalEvent } from "beautiful-react-hooks";

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const options = { capture: true, passive: true, once: true };
  const onWindowResize = useGlobalEvent("resize", options);

  onWindowResize(event => {
    setWindowWidth(window.innerWidth);
  });

  return <DisplayDemo>Current window width: {windowWidth}</DisplayDemo>;
};

<TestComponent />;
```

### Определение обратного вызова:

Третий параметр позволяет определить обратный вызов, избегая использования возвращаемого установщика обработчика (handler setter).

```jsx harmony
import { useState } from "react";
import { useGlobalEvent } from "beautiful-react-hooks";

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useGlobalEvent("resize", null, event => {
    setWindowWidth(window.innerWidth);
  });

  return <DisplayDemo>Current window width: {windowWidth}</DisplayDemo>;
};

<TestComponent />;
```

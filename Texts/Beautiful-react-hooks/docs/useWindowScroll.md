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

### Callback setter синтакис:

Если первый параметр не указан, возвращаемую функцию (_установщик обработчика_ - handler setter) можно использовать для
установки обработчика `useWindowScroll`, если он вызывается немедленно.

**Обратите внимание**: возвращаемый установщик обработчика (handler setter)предназначен только для изменения значения ссылки обратного вызова, он не
причина повторного рендеринга компонента также не должна вызываться асинхронно.

```jsx harmony
import { useState } from "react";
import { useWindowScroll } from "beautiful-react-hooks";

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onScroll = useWindowScroll();

  onScroll(() => {
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

#### ✅ Совет:

Если вы используете функцию `setState` в обратном вызове`useWindowScroll`, вы, вероятно, захотите оптимизировать производительность своего компонента, предотвращая слишком много бесполезных рендеров, пожалуйста, примите во внимание использование
[UseThrottledFn](useThrottledFn.md).

```jsx harmony
import { useState } from "react";
import { useWindowScroll, useThrottledFn } from "beautiful-react-hooks";

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useWindowScroll(
    useThrottledFn(event => {
      setScrollY(window.scrollY);
    })
  );

  return (
    <DisplayDemo>
      <p>window y-scroll: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowScrollReporter />;
```

### Овладение хуками

#### ✅ Когда использовать

- При необходимости выполнения функции во время прокрутки окна, например: для отслеживания положения прокрутки окна

#### ✅ Когда не использовать

- Вы не можете использовать его асинхронно, так как это нарушит [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- Если используется метод установки обработчика (handler setter), он не должен использоваться асинхронно, а вызывается немедленно

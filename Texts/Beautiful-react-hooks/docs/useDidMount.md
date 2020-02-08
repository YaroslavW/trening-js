# useDidMount

Принимает функцию, выполняемую, когда компонент монтируется.

### 💡 Зачем?

- заботится о выполнении обратного вызова при монтировании компонента
- Это как ярлык для `useEffect (onMount, [])`

### Основное использование

```jsx harmony
import { useState } from "react";
import { Paragraph } from "beautiful-react-ui";
import { useDidMount } from "beautiful-react-hooks";

const ComponentDidMount = () => {
  const [mounted, setIsMounted] = useState(false);

  useDidMount(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      clearTimeout(timeout);
    }, 1000);
  });

  return (
    <DisplayDemo>
      {mounted && <Paragraph>Component did mount!</Paragraph>}
    </DisplayDemo>
  );
};

<ComponentDidMount />;
```

### Синтаксис обратного setter - вызова:

если первый параметр не указан, возвращаемую функцию (_установщик обработчика - handler setter_) можно использовать для того, чтобы
установить обработчик `useDidMount`, если он вызывается немедленно.

**Обратите внимание**: возвращаемый _handler setter_ - установщик обработчика предназначен только для изменения значения ссылки обратного вызова, он не
причина повторного рендеринга компонента также эта функция не должна вызываться асинхронно.

```jsx harmony
import { useState } from "react";
import { Paragraph } from "beautiful-react-ui";
import { useDidMount } from "beautiful-react-hooks";

const ComponentDidMount = () => {
  const [mounted, setIsMounted] = useState(false);
  const onMount = useDidMount();

  onMount(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      clearTimeout(timeout);
    }, 1000);
  });

  return (
    <DisplayDemo>
      {mounted && <Paragraph>Component did mount!</Paragraph>}
    </DisplayDemo>
  );
};

<ComponentDidMount />;
```

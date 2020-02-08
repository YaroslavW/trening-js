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

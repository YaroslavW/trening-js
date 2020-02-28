# useLifecycle

Принимает две функции, которые должны быть выполнены в течение жизненного цикла компонента.

Первый будет запущен после того, как **component did mount**, второй сразу перед **component unmounts**.

### 💡 Зачем?

- Включает "lifecycle hooks", такие как `useDidMount` и`useWillUnmount`;
- Это как ярлык для `useEffect (onMount, [])` и `useEffect (() => () => willUnmount, [])`;

### Основное использование

```jsx harmony
import { useCallback } from "react";
import { useLifecycle } from "beautiful-react-hooks";

/**
 * useDidMount example component
 */
const LifeCycleComponent = () => {
  const onMount = useCallback(() => {
    console.log("Component did mount");
  }, []);

  const onUnmount = useCallback(() => {
    console.log("Component will unmount");
  }, []);

  useLifecycle(onMount, onUnmount);

  return <DisplayDemo>Check the javascript console</DisplayDemo>;
};

<LifeCycleComponent />;
```

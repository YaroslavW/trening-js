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

### Синтаксис обратного вызова

если параметры не предоставлены, возвращаемый объект установщиков обработчиков (handler setters) может быть использован для
установки обработчиков `useDidMount` и`useWillUnmount`, при условии, что они немедленно вызываются.

**Обратите внимание**: возвращаемые установщики обработчиков (handler setters) предназначены для изменения значения только ссылки обратного вызова, они не
причина повторного рендеринга компонента также не должна вызываться асинхронно.

```jsx harmony
import { useLifecycle } from "beautiful-react-hooks";

const ComponentDidMount = () => {
  const { onDidMount, onWillUnmount } = useLifecycle();

  onDidMount(() => {
    console.log("Component did mount");
  });

  onWillUnmount(() => {
    console.log("Component will unmount");
  });

  return <DisplayDemo>Check the javascript console</DisplayDemo>;
};

<ComponentDidMount />;
```

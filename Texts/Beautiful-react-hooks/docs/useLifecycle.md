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

#### ✅ Совет:

При использовании компонента функции React вам не следует думать об этом с точки зрения «жизненного цикла».

Хук `useLifecycle` действительно предназначен как ярлык для`useEffect (onMount, [])`и
`useEffect (() => () => willUnmount, [])`.

Чтобы глубже понять `useEffect`, что это такое и как его следует правильно использовать, пожалуйста, прочитайте
[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Овладение хуками

#### ✅ Когда использовать

- Когда нужно выполнить функцию после того, как компонент смонтирован (component did mount)
- При необходимости выполнения функции непосредственно перед размонтированием компонента (component unmounts)
- При необходимости быстрого доступа к жизненному циклу компонента

#### ✅ Чего не делать

- Вы не можете использовать его асинхронно, так как это нарушит [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- При использовании установщиков обработчиков ( handler setters) они не должны использоваться асинхронно, а должны вызываться немедленно.

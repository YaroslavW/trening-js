# useWillUnmount

Принимает функцию, выполняемую непосредственно перед размонтированием компонента (component unmounts).

### 💡 Зачем?

- выполняет обратный вызов непосредственно перед размонтированием компонента
- Это как ярлык для `useEffect (() => () => willUnmount, [])`;

### Основное использование

```jsx harmony
import { useWillUnmount } from "beautiful-react-hooks";

const ComponentWillUnmount = () => {
  useWillUnmount(() => {
    console.log("Component did unmount");
  });

  return (
    <DisplayDemo>
      Check the javascript console after moving from this page
    </DisplayDemo>
  );
};

<ComponentWillUnmount />;
```

### Callback setter синтакис:

Если первый параметр не указан, возвращаемую функцию (_установщик обработчика_ - handler setter) можно использовать для
установки обработчика `useWillUnmount`, если он вызывается немедленно.

**Обратите внимание**: возвращаемый установщик обработчика (handler setter) предназначен только для изменения значения ссылки обратного вызова, он не
причина повторного рендеринга компонента также не должна вызываться асинхронно.

```jsx harmony
import { useWillUnmount } from "beautiful-react-hooks";

const ComponentWillUnmount = () => {
  const onUnmount = useWillUnmount();

  onUnmount(() => {
    console.log("Component did unmount");
  });

  return (
    <DisplayDemo>
      Check the javascript console after moving from this page
    </DisplayDemo>
  );
};

<ComponentWillUnmount />;
```

#### ✅ Совет:

При использовании компонента функции React вам не следует думать об этом с точки зрения «жизненного цикла».

Хук `useWillUnmount` действительно предназначен как ярлык для`useEffect (() => () => willUnmount, [])`.

Чтобы глубже понять `useEffect`, что это такое и как его следует правильно использовать, пожалуйста, прочитайте
«[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Овладение хуками

#### ✅ Когда использовать

- Когда нужно выполнить функцию после того, как компонент был смонтирован (component did mount).

#### ✅ Когда не использовать

- Вы не можете использовать его асинхронно, так как это нарушит [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- Если используется метод установки обработчика (handler setter), он не должен использоваться асинхронно, а вызывается немедленно.

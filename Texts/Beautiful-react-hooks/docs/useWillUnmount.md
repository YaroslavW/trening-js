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

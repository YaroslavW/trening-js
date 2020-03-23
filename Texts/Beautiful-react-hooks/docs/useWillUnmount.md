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

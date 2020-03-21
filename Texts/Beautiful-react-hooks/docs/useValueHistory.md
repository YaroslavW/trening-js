# useValueHistory

Принимает переменную (_возможно, `props` или `state`_) и возвращает ее историю (изменения через обновления).

### 💡 Зачем?

- Вы хотите отслеживать историю значений (value).

### Основное использование

```jsx harmony
import { useState } from "react";
import { useInterval, useValueHistory } from "beautiful-react-hooks";

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const countHistory = useValueHistory(count);

  useInterval(() => setCount(1 + count), 500);

  return (
    <DisplayDemo>
      <p>Count: {count}</p>
      <p>The history of the `count` state is:</p>
      <blockquote>{countHistory.join(", ")}</blockquote>
    </DisplayDemo>
  );
};

<TestComponent />;
```

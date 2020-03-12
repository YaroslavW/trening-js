# usePreviousValue

Принимает переменную (_возможно, props или state_) и возвращает значение предыдущего рендера.

### 💡 Зачем?

- Вы хотите отслеживать изменения состояния вашего компонента / реквизита, чтобы решить, должен ли он обновляться или нет

### Основное использование

```jsx harmony
import { useState } from "react";
import { useInterval, usePreviousValue } from "beautiful-react-hooks";

const TestComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const prevSeconds = usePreviousValue(seconds);

  useInterval(() => setSeconds(1 + seconds), 1000);

  return (
    <DisplayDemo>
      <p>{seconds}s</p>
      <p>The previous value of the state 'seconds' was: {prevSeconds}</p>
    </DisplayDemo>
  );
};

<TestComponent />;
```

# useConditionalTimeout

Хук асинхронной утилиты, который принимает `function` -"функцию" обратного вызова, "время задержки" - `delay time` (_ в миллисекундах _) и "условие" - `condition`, затем задерживает
выполнение данной функции к определенному времени, когда условие проверено.

### 💡 Зачем?

- начать тайм-аут только после проверки данного условия;
- заботится о выполнении данного обратного вызова независимо от повторного рендеринга компонента;
- отменяет тайм-аут, когда компонент демонтируется (или нет, зависит от определенных опций) и / или данное условие проверяется;

### Основное использование:

```jsx harmony
import { useState } from "react";
import { Button } from "beautiful-react-ui";
import { useConditionalTimeout } from "beautiful-react-hooks";

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useConditionalTimeout(
    () => {
      setShowContent(true);
    },
    2000,
    condition
  );

  return (
    <DisplayDemo>
      <Button color="primary" icon="clock" onClick={() => setCondition(true)}>
        {" "}
        Start a 2 seconds timeout
      </Button>
      {showContent && <div style={{ fontSize: "3rem" }}>🕰</div>}
    </DisplayDemo>
  );
};

<ConditionalDelayedContentComponent />;
```

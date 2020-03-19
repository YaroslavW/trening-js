# useTimeout

Хук асинхронной утилиты (async-utility hook), который принимает функцию обратного вызова и функцию - `function` времени задержки - `delay time` (_в миллисекундах_), затем задерживает выполнение данной функции к определенному времени.

### 💡 Зачем?

- заботится о выполнении данного обратного вызова независимо от повторного рендеринга компонента;
- отменяет тайм-аут при размонтировании компонента - component unmount (или нет, зависит от заданных опций);
- возвращает состояние тайм-аута (очищено / не очищено)
- возвращает метод, который может отменить установленное время ожидания (вызвать повторную визуализацию компонента - component re-render)

### Основное использование

```jsx harmony
import { useState } from "react";
import { useTimeout } from "beautiful-react-hooks";

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);

  // delay the function by 2000ms
  useTimeout(() => {
    setShowContent(true);
  }, 2000);

  return (
    <DisplayDemo>
      <p>Content will show in 2 seconds...</p>
      {showContent && <div style={{ fontSize: "3rem" }}>🕰</div>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />;
```

### State & clear method:

Хук возвращает состояние тайм-аута (логическое значение, очищено / не очищено) и метод для его возможного сброса.

**Примечание:** программная очистка таймаута вызовет повторную визуализацию компонента.

```jsx harmony
import { useState } from "react";
import { useTimeout } from "beautiful-react-hooks";

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const [isCleared, clearTimeoutRef] = useTimeout(() => {
    setShowContent(true);
  }, 5000);

  return (
    <DisplayDemo>
      <p>Content will show in 5 seconds...</p>
      {showContent && <div style={{ fontSize: "3rem" }}>🕰</div>}
      {!isCleared && (
        <button onClick={clearTimeoutRef}>Press here to cancel timeout</button>
      )}
      {isCleared && <p>Cleared</p>}
    </DisplayDemo>
  );
};

(<DelayedContentComponent />)``;
```

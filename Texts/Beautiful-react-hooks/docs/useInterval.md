# useInterval

Хук асинхронной утилиты (async-utility hook), который принимает функцию `function` обратного вызова (callback ) и функцию времени задержки - `delay time` (_в миллисекундах_), затем повторяет
выполнение данной функции к определенному времени.

### 💡 Зачем?

- заботится о выполнении данного обратного вызова независимо от повторного рендеринга компонента;
- отменяет интервал, когда компонент размонтируется (или нет, зависит от заданных опций);
- возвращает состояние интервала (очищено / не очищено)
- возвращает метод, который может отменить установленный интервал (вызвать повторную визуализацию компонента)

### Основное использование

```jsx harmony
import { useState } from "react";
import { useInterval } from "beautiful-react-hooks";

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // repeat the function each 1000ms
  useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo>
      <p>Rendering since {seconds} seconds</p>
    </DisplayDemo>
  );
};

<DelayedContentComponent />;
```

### Методы установки и очистки:

Хук возвращает состояние тайм-аута (логическое значение - boolean, очищено / не очищено) и метод для его возможного сброса.

**Примечание:** программная очистка таймаута вызовет повторную визуализацию компонента.

```jsx harmony
import { useState } from "react";
import { useInterval } from "beautiful-react-hooks";

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCleared, clearInterval] = useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo>
      <p>Rendering since {seconds} seconds</p>
      {!isCleared && <button onClick={clearInterval}>Stop it!</button>}
      {isCleared && <p>Interval cleared!</p>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />;
```

### Параметры:

`useInterval` может принять объект параметров, предоставленный в качестве возможного параметра.

#### cancelOnUnmount:

Определяет, следует ли очистить тайм-аут при размонтировании (unmount).

**default**: `true`

```jsx harmony
import { useState } from "react";
import { useInterval } from "beautiful-react-hooks";

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const options = { cancelOnUnmount: false };

  useInterval(() => setSeconds(1 + seconds), 1000, options);

  return (
    <DisplayDemo>
      <p>
        Content rendering since {seconds} but will not be cleared on unmount
      </p>
    </DisplayDemo>
  );
};

<DelayedContentComponent />;
```

### Овладение хуками

#### ✅ Когда использовать

- Если необходимо выполнить функцию каждые x миллисекунд, независимо от повторного рендеринга компонента

#### ✅ Чего не делать

- Вы не можете использовать его асинхронно, так как это нарушит правила хуков - [rules of hooks](https://reactjs.org/docs/hooks-rules.html)

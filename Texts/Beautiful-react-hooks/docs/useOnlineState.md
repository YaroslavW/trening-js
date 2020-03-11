# useOnlineState

Использует [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) для определения
подключен ли браузер или нет.

Возвращает логическое значение, которое при значении `true` указывает, что браузер подключен.

### 💡 Зачем?

- Вы хотите, чтобы ваш компонент повторно визуализировался, когда соединение подключено к сети - online или отключено - offline.

### Основное использование

```jsx harmony
import { useOnlineState } from "beautiful-react-hooks";

const ConnectionTest = () => {
  const isOnline = useOnlineState();

  return (
    <DisplayDemo>
      <p>Connection status: {isOnline ? "online" : "offline"}</p>
    </DisplayDemo>
  );
};

<ConnectionTest />;
```

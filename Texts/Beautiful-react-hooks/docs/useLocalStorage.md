# useLocalStorage

Хук для хранения данных - useLocalStorage. Использует [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store values.

### 💡 Зачем?

- Быстрый и альтернативный способ чтения / хранения данных.

### Основное использование

```jsx harmony
import React, { useCallback } from "react";
import { Pill, Paragraph, Icon } from "beautiful-react-ui";
import { useLocalStorage } from "beautiful-react-hooks";

const NotificationBadgeExample = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useLocalStorage(
    "demo-notification-count",
    notifications
  );

  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  return (
    <DisplayDemo>
      <Paragraph>Click on the badge to clear from the local storage</Paragraph>
      <Pill color="primary" onClick={clearNotifications}>
        <Icon name="envelope" />
        You've got {notificationCount} new messages
      </Pill>
    </DisplayDemo>
  );
};

<NotificationBadgeExample notifications={100} />;
```

### Овладение хуками

#### ✅ Когда использовать

- Когда вам нужно получить / сохранить данные из и в локальное хранилище

#### ✅ Чего не делать

- Не используйте этот хук в качестве менеджера состояний (state manager), localStorage предназначен для использования с небольшими порциями данных.

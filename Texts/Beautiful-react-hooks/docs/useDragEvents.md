# useDragEvents

Возвращает объект сеттеров обработчиков для обработки связанных с перетаскиванием событий.
Он принимает ссылку DOM, представляющую цель событий (к которой прикрепляются события).

Возвращаемые установщики обработчиков: `onDrag`,`onDrop`, `onDragEnter`,`onDragEnd`, `onDragExit`,`onDragLeave`, `onDragOver`,`onDragStart`;

**Пожалуйста, обратите внимание:** возвращенные установщики обработчика (handler setters) должны вызываться немедленно в теле компонента функции, не пытайтесь
вызывать эти функции асинхронно.

### 💡 Зачем?

- заботится о добавлении слушателей связанных с перетаскиванием событий к определенной цели
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют выполнять абстракции для событий, связанных с перетаскиванием

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useDragEvents`

```jsx harmony
import { useRef, useState } from "react";
import { useDragEvents } from "beautiful-react-hooks";

const MyComponent = () => {
  const ref = useRef();
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(ref);

  onDragStart(event => {
    setIsDragged(true);
  });

  onDragEnd(event => {
    setIsDragged(false);
  });

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: "20px 0", background: "#1D6C8B" }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```

### Перетаскиваемый атрибут:

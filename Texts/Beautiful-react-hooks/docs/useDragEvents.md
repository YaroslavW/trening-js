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

Второй аргумент `useDragEvents` определяет, устанавливать ли атрибут`draggable` для целевого элемента.
По умолчанию это установлено в `true`.

**Пожалуйста, обратите внимание**:

Следующий код предназначен только для примера, **не используйте эти хуки для замены со стандартными props**, пожалуйста, прочитайте [Овладение хуками](#Овладение_хуками) ниже.

```jsx harmony
import { useRef, useState } from "react";
import { useDragEvents } from "beautiful-react-hooks";

const MyComponent = () => {
  const draggableRef = useRef();
  const dropzoneRef = useRef();
  const [droppedTimes, setDroopedTimes] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(draggableRef);
  const { onDrop, onDragOver } = useDragEvents(dropzoneRef, false);

  onDragStart(event => {
    setIsDragged(true);
  });

  onDragEnd(event => {
    setIsDragged(false);
  });

  onDragOver(event => {
    event.preventDefault();
  });

  onDrop(event => {
    setDroopedTimes(1 + droppedTimes);
  });

  return (
    <DisplayDemo>
      <div
        ref={draggableRef}
        style={{ padding: "20px 0", background: "#1D6C8B" }}
      >
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>

      <div
        ref={dropzoneRef}
        style={{ padding: "20px 0", marginTop: "20px", background: "#BE496E" }}
      >
        Drop zone! Dropped items: {droppedTimes}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```

### Овладение хуками

#### ✅ Когда использовать

- При необходимости абстрагировать некоторую логику, связанную с перетаскиванием, в пользовательские хуки

#### ✅ Чего не делать

- Вы не можете использовать возвращенный установщик обработчика (handler setter) асинхронно, это не будет иметь никакого эффекта, кроме изменения обработчика
    возможно, приводит к ошибкам в вашем коде.
- Абсолютно избегайте использования установщиков обработчиков (handler setters) `useDragEvents` для замены стандартных реквизитов - `props` обработчика перетаскивания.
- `useDragEvents` предназначен для использования для абстрагирования более сложных хуков, которые должны управлять перетаскиванием n, например:
  drag-around hook.
- Используя обработчики `useDragEvents` вместо классического подхода к `props`, это так же плохо, как кажется, так как вы
  потеряете повышение производительности React SyntheticEvent. <br />
- Если вы делаете что-то вроде следующего, пожалуйста, продолжайте делать это:

```jsx harmony static noedit
const MyComponent = props => {
  const { dragStartHandler } = props;

  return <div onDragStart={dragStartHandler} />;
};
```

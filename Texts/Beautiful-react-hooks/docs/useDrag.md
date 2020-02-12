# useDrag

Принимает ref элемента HTML, а затем делает его перетаскиваемым.
Возвращает логическое сообщение о том, перемещается элемент или нет.

### 💡 Зачем?

- заботится о добавлении слушателей (listeners) связанных с перетаскиванием событий к определенной цели
- заботится о чистке слушателя, когда компонент будет размонтироваться (component will unmount)
- позволяют легко реализовать перетаскиваемую (draggable) бизнес-логику

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useDrag`

```jsx harmony
import { useRef } from "react";
import { useDrag } from "beautiful-react-hooks";

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref);

  return (
    <DisplayDemo>
      <div
        ref={ref}
        style={{
          padding: "20px 0",
          background: isDragged ? "#BE496E" : "#1D6C8B"
        }}
      >
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```

### Перетащите изображение:

```jsx harmony
import { useRef } from "react";
import { useDrag } from "beautiful-react-hooks";

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref, {
    dragImage: "https://beautifulinteractions.com/img/logo-colorful.svg",
    dragImageXOffset: 5,
    dragImageYOffset: 5
  });

  return (
    <DisplayDemo>
      <div
        ref={ref}
        style={{
          padding: "20px 0",
          background: isDragged ? "#BE496E" : "#1D6C8B"
        }}
      >
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```
### Передача данных:
### Data transfer:

```jsx harmony
import { useRef } from 'react';
import { useDrag } from 'beautiful-react-hooks'; 

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref, {
    transfer: { id: 'item-id', foo: 'bar' },
    transferFormat: 'text/plain',
  });

  return (
    <DisplayDemo>
      <div ref={ref} style={{padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B'}}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```
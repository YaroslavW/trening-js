# useDropZone

Принимает ссылку на элемент HTML, а затем делает ее активной зоной приема данных от перетаскиваемого объекта.

### 💡 Зачем?

- заботится о добавлении прослушивателей связанных с отбрасыванием (drop-related) событий к определенной цели
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют легко реализовать бизнес-логику, связанную с отбрасыванием (drop-related)

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useDropZone`

```jsx harmony
import { useState, useRef } from "react";
import { useDrag, useDropZone } from "beautiful-react-hooks";

const MyComponent = () => {
  const dragRef = useRef();
  const dropRef = useRef();
  const isDragged = useDrag(dragRef, {
    transfer: { data: "foo" },
    transferFormat: "text"
  });
  const { isOver, onDrop } = useDropZone(dropRef);
  const [data, setData] = useState();

  onDrop(event => {
    event.preventDefault();
    const nextData = event.dataTransfer.getData("text");
    setData(nextData);
    __;
  });

  return (
    <DisplayDemo>
      <div
        ref={dragRef}
        style={{
          padding: "20px 0",
          background: isDragged ? "#BE496E" : "#1D6C8B"
        }}
      >
        {!isDragged && <span>Drag to send data</span>}
        {isDragged && <span>is being dragged</span>}
      </div>
      <div
        ref={dropRef}
        style={{
          padding: "20px 0",
          marginTop: "4rem",
          background: isOver ? "#BE496E" : "white"
        }}
      >
        {!data && "Drop here to receive data"}
        {data && `Received: ${data}`}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```

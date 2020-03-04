# useMouse

Возвращает массив, в котором первый элемент является состоянием мыши из [useMouseState] (./ useMouseState.md) и
Второй элемент - это объект установки обработчиков (handler setters) из [useMouseEvents] (./ useMouseEvents.md).

Он предназначен для быстрого доступа к этим крючкам.

### 💡 Зачем?

- позволяют легко получить положение мыши
- заботится о добавлении слушателей событий мыши глобально или к определенной цели
- заботится о чистке слушателя, когда компонент размонтируется
- позволяют выполнять абстракции на событиях, связанных с мышью

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useMouse`

```jsx harmony
import { useRef, useState } from "react";
import { useMouse } from "beautiful-react-hooks";

const MouseReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref);

  onMouseEnter(() => setShowCoords(true));
  onMouseLeave(() => setShowCoords(false));

  return (
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates:
        {showCoords && (
          <p>
            {position.clientX}, {position.clientY}
          </p>
        )}
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />;
```

### Глобальные события

Не используйте аргументы для `useMouse`

```jsx harmony
import { useRef, useState } from "react";
import { useMouse } from "beautiful-react-hooks";

const MouseReporter = () => {
  const ref = useRef();
  const [mouseIsOver, setMouseHover] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref);

  onMouseEnter(() => setMouseHover(true));
  onMouseLeave(() => setMouseHover(false));

  return (
    <DisplayDemo>
      <div ref={ref} style={{ background: mouseIsOver ? "#FF4365" : "white" }}>
        The current mouse coordinates are:
        <p>
          {position.clientX}, {position.clientY}
        </p>
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />;
```

### Овладение хуками

#### ✅ Когда использовать

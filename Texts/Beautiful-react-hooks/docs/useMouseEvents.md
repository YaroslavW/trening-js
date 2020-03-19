# useMouseEvents

Возвращает объект-установщик обработчика (handler setters) для обработки событий мыши.
Он принимает ссылку DOM, представляющую цель событий -events target (к которой прикрепляются события).

Если цель (events target) не указана, события будут глобально присоединены к объекту `document`.

Возвращаемые установщики обработчиков: `onMouseDown`,`onMouseEnter`, `onMouseLeave`,`onMouseMove`, `onMouseOut`,`onMouseOver`, `onMouseUp`;

**Пожалуйста, обратите внимание:** возвращенные установщики обработчика (handler setters) должны вызываться немедленно в теле компонента функции, не пытайтесь вызывать эти функции асинхронно.

### 💡 Зачем?

- заботится о добавлении слушателей событий мыши глобально или к определенной цели
- заботится о чистке слушателя, когда компонент размонтируется
- позволяют выполнять абстракции на событиях, связанных с мышью

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useMouseEvents`

```jsx harmony
import { useRef, useState } from "react";
import { useMouseEvents } from "beautiful-react-hooks";

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState();
  const ref = useRef();
  const { onMouseMove, onMouseLeave } = useMouseEvents(ref);

  onMouseMove(event => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  onMouseLeave(() => {
    setCoordinates(undefined);
  });

  return (
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates.
        {coordinates && (
          <p>
            Coordinates x:{coordinates[0]} y:{coordinates[1]}
          </p>
        )}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />;
```

### Глобальные события

Не используйте аргументы для `useMouseEvents`

```jsx harmony
import { useState } from "react";
import { useMouseEvents } from "beautiful-react-hooks";

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseEvents();

  onMouseMove(event => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <DisplayDemo>
      The current mouse coordinates are:
      <p>
        x:{coordinates[0]} y:{coordinates[1]}
      </p>
    </DisplayDemo>
  );
};

<MyComponent />;
```

### Овладение хуками

#### ✅ Когда использовать

- При необходимости абстрагировать некоторую логику, связанную с мышью, в пользовательские хуки

#### ✅ Чего не делать

- Вы не можете использовать возвращенный установщик обработчика (handler setter) асинхронно, это не будет иметь никакого эффекта, кроме изменения обработчика
    возможно, приводит к ошибкам в вашем коде.
- Абсолютно избегайте использования установщиков обработчиков (handler setters) `useMouseEvents` для замены стандартных подпорок обработчиков мыши.
- `useMouseEvents` предназначен для использования для абстрагирования более сложных хуков, которые должны управлять мышью, например: хук перетаскивания - a drag n drop hook и пр.
- Используя обработчики `useMouseEvents` вместо классического подхода к props, это так же плохо, как кажется, так как
  потерять повышение производительности React SyntheticEvent. <br />
- Если вы делаете что-то вроде следующего, пожалуйста, продолжайте делать это:

```jsx harmony static noedit
const MyComponent = props => {
  const { mouseDownHandler } = props;

  return <div onMouseDown={mouseDownHandler} />;
};
```

# useMouseState

Возвращает объект свойств позиции мыши (например, clientX, clientY).
Он принимает ссылку DOM, представляющую цель событий - events target (к которой прикрепляются события).

Если цель (target) не указана, события будут глобально присоединены к объекту `document`.

### 💡 Зачем?

- позволяют легко получить положение мыши
- заботится о добавлении слушателей событий мыши глобально или к определенной цели
- заботится о чистке слушателя, когда компонент размонтируется

### Основное использование

Предоставьте ссылку DOM в качестве первого параметра для `useMouseState`

```jsx harmony
import { useMouseState } from "beautiful-react-hooks";

const MouseReporter = () => {
  const { clientX, clientY } = useMouseState();

  return (
    <DisplayDemo>
      The current mouse coordinates are:
      {clientX}, {clientY}
    </DisplayDemo>
  );
};

<MouseReporter />;
```

### Овладение хуками

#### ✅ Когда использовать

- При необходимости легко получить положение мыши

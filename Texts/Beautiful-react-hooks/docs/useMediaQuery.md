# useMediaQuery

Принимает строку медиа-запроса, затем использует [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
API для определения соответствия с текущим документом.

Он также отслеживает изменения документа, чтобы определить, когда он перестает соответствовать заданному медиа-запросу.

Возвращает состояние действительности данного медиазапроса.

### 💡 Зачем?

- заботится о повторной визуализации компонента при изменении данного медиазапроса
- избавиться от слушателя, когда компонент будет размонтирован.

```jsx harmony
import { useMediaQuery } from "beautiful-react-hooks";

const MediaQueryReporter = () => {
  const isSmall = useMediaQuery("(max-width: 48rem)");
  const isLarge = useMediaQuery("(min-width: 48rem)");

  return (
    <DisplayDemo>
      <p>Small view? {isSmall ? "yes" : "no"}</p>
      <p>Large view? {isLarge ? "yes" : "no"}</p>
    </DisplayDemo>
  );
};

<MediaQueryReporter />;
```

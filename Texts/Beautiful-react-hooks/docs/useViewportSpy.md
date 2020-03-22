# useViewportSpy

Использует API [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver), чтобы сообщить
виден ли данный элемент DOM (из useRef) в области просмотра.

### 💡 Зачем?

- асинхронно наблюдает изменения в пересечении данного элемента с документом
- Может использоваться для выполнения анимации, когда компонент появляется в области просмотра

### Основное использование

```jsx harmony
import { useRef } from "react";
import { useViewportSpy } from "beautiful-react-hooks";

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref);

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: "20px 0", background: "#1D6C8B" }}>
        Observed element
      </div>
      <div style={{ margin: "20px 0" }}>
        is the observed element in viewport? {isVisible ? "yes" : "no"}
      </div>
    </DisplayDemo>
  );
};

<ViewportSpyComponent />;
```

#### ✅ Совет:

Этот хук может использоваться для выполнения анимации, когда компонент / элемент входит или выходит из области просмотра.
Для глубокого понимания [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
пожалуйста, прочтите [Использование Intersection Observer API для запуска анимации и переходов](https://alligator.io/js/intersection-observer)


# useValueHistory

Принимает переменную (_возможно, `props` или `state`_) и возвращает ее историю (изменения через обновления).

### 💡 Зачем?

- Вы хотите отслеживать историю значений (value).

### Основное использование

```jsx harmony
import { useState } from "react";
import { useInterval, useValueHistory } from "beautiful-react-hooks";

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const countHistory = useValueHistory(count);

  useInterval(() => setCount(1 + count), 500);

  return (
    <DisplayDemo>
      <p>Count: {count}</p>
      <p>The history of the `count` state is:</p>
      <blockquote>{countHistory.join(", ")}</blockquote>
    </DisplayDemo>
  );
};

<TestComponent />;
```
### Параметры:

Второй аргумент может быть объектом [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

```jsx harmony
import { useRef } from 'react'; 
import { useViewportSpy } from 'beautiful-react-hooks'; 

const ViewportSpyComponent = () => {
   const ref = useRef();
   const isVisible = useViewportSpy(ref, { threshold: 0.6 });
      
   return (
     <DisplayDemo>
       <div ref={ref} style={{padding: '20px 0', background: '#1D6C8B'}}>
          Observed element
       </div>
       <div style={{margin: '20px 0'}}>
         is the observed element in viewport? {isVisible ? 'yes': 'no'}
       </div>
     </DisplayDemo>
   );
};

<ViewportSpyComponent />
```
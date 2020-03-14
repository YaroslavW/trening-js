# useRequestAnimationFrame

Заботится о запуске функции анимации, предоставляемой в качестве первого аргумента, при этом отслеживая ее прогресс.

При использовании `useRequestAnimationFrame` немедленно запускает циклический вызов предоставленной функции, используя
[window.requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) под капотом.

Предоставленная функция получает прогресс анимации и функцию `next`, которую необходимо выполнить, чтобы сохранить анимацию живой.

Цикл заканчивается, когда прогресс анимации достигает значения 100. (или любое другое значение, указанное как `finishAt`, проверьте параметры)

### 💡 Зачем?

- Простое управление функцией requestAnimationFrame в компоненте React.

### Основное использование

```jsx harmony
import { useRef } from "react";
import { Alert } from "beautiful-react-ui";
import { useRequestAnimationFrame } from "beautiful-react-hooks";

const AnimationExample = () => {
  const ref = useRef();

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `translateX(${progress}px)`;
    next();
  });

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
    </DisplayDemo>
  );
};

<AnimationExample />;
```

### Параметры:

Объект параметров может использоваться как второй аргумент для управления анимацией.

**Обратите внимание**: options.finishAt = -1 приведет к бесконечной анимации

```jsx harmony
import { useRef } from "react";
import { Alert } from "beautiful-react-ui";
import { useRequestAnimationFrame } from "beautiful-react-hooks";

const AnimationExample = () => {
  const ref = useRef();
  const options = { increment: 0.5, startAt: 0, finishAt: -1 };

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `rotate(${progress}deg)`;
    next();
  }, options);

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
    </DisplayDemo>
  );
};

<AnimationExample />;
```

### onFinish callback

Хук возвращает функцию, которая может установить обратный вызов после завершения анимации:

```jsx harmony
import { useRef, useState } from "react";
import { Alert, Paragraph } from "beautiful-react-ui";
import { useRequestAnimationFrame } from "beautiful-react-hooks";

const AnimationExample = () => {
  const ref = useRef();
  const [isFinished, setIsFinished] = useState(false);
  const onFinish = useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `translateX(${progress}px)`;
    next();
  });

  onFinish(() => setIsFinished(true));

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
      {isFinished && <Paragraph>Animation completed!</Paragraph>}
    </DisplayDemo>
  );
};

<AnimationExample />;
```

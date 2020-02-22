# useGeolocationState

Возвращает объект, содержащий информацию `position`, логический флаг `isSupported`, сообщающий, поддерживается ли API геолокации или нет, а логический флаг `isRetrieving` сообщает о том, получает ли хук
текущую позиция или нет.

Положение получено с помощью
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API),
когда поддерживается.

Возможно, он принимает объект [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)
для использования в качестве параметра при использовании метода `Geolocation.getCurrentPosition ()`.

### 💡 Зачем?

- позволяют легко получить доступ к [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют выполнять абстракции на событиях, связанных с геолокацией

### Основное использование

```jsx harmony
import { useGeolocationState } from "beautiful-react-hooks";

const PositionReporter = () => {
  const { isSupported, isRetrieving, position } = useGeolocationState();

  return (
    <DisplayDemo>
      The current position is:
      {isRetrieving && <p>Retrieving position...</p>}
      {isSupported &&
        position && [
          <p key={0}>Lat: {position.coords.latitude}</p>,
          <p key={1}>Lng: {position.coords.longitude}</p>
        ]}
    </DisplayDemo>
  );
};

<PositionReporter />;
```

### Параметры:

Перед использованием, пожалуйста, прочитайте о [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

```jsx harmony
import { useGeolocationState } from "beautiful-react-hooks";

const PositionReporter = () => {
  const { isSupported, isRetrieving, position } = useGeolocationState({
    enableHighAccuracy: true,
    timeout: 0xffffffff,
    maximumAge: 0
  });

  return (
    <DisplayDemo>
      The current high accuracy position is:
      {isRetrieving && <p>Retrieving position...</p>}
      {isSupported &&
        position && [
          <p key={0}>Lat: {position.coords.latitude}</p>,
          <p key={1}>Lng: {position.coords.longitude}</p>
        ]}
    </DisplayDemo>
  );
};

<PositionReporter />;
```

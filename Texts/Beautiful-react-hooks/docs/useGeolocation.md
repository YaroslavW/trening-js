# useGeolocation

Возвращает массив, в котором первым элементом является состояние геолокации из [useGeolocationState] (./ useGeolocation.md).
а второй является объектом установщиков обработчиков (handler setters) из [useGeolocationEvents] (./ useGeolocationEvents).

Он предназначен для быстрого доступа к этим крючкам.

### 💡 Зачем?

- позволяют легко получить доступ к [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- заботится о добавлении слушателей событий геолокации
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют выполнять абстракции на событиях, связанных с геолокацией

### Основное использование

```jsx harmony
import { useGeolocation } from "beautiful-react-hooks";

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation();

  onChange(() => {
    console.log("Position changed...");
  });

  return (
    <DisplayDemo>
      The current position is:
      {geoState.isRetrieving && <p>Retrieving position...</p>}
      {geoState.isSupported &&
        geoState.position && [
          <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
          <p key={1}>Lng: {geoState.position.coords.longitude}</p>
        ]}
    </DisplayDemo>
  );
};

<PositionReporter />;
```

# useGeolocationEvents

Возвращает объект сеттеров обработчиков (handler setters) для обработки событий, связанных с геолокацией.
Пока что поддерживаются следующие методы: `onChange`, вызываемый при изменении позиции, и`onError`, вызываемый при
при получении позиции произошла ошибка. <br/>
Возвращенный объект также содержит логический флаг `isSupported`, сообщающий, поддерживается ли API геолокации.

**Пожалуйста, обратите внимание:** возвращенные установщики обработчика (handler setters) должны вызываться немедленно в теле компонента функции, не пытайтесь вызывать эти функции асинхронно.

### 💡 Зачем?

- заботится о добавлении слушателей событий геолокации
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют выполнять абстракции на событиях, связанных с геолокацией

### Основное использование

```jsx harmony
import { useState } from "react";
import { useGeolocationEvents } from "beautiful-react-hooks";

const GeoReporter = () => {
  const [position, setGeoPosition] = useState();
  const [error, setError] = useState();
  const { isSupported, onChange, onError } = useGeolocationEvents({
    enableHighAccuracy: true
  });

  onChange(geoPosition => setGeoPosition(geoPosition));

  onError(err => setError(err));

  return (
    <DisplayDemo>
      <p>Geolocation supported: {isSupported ? "yes" : "no"}</p>
      {!error && position && (
        <p>
          lat: {position.coords.latitude}, lng: {position.coords.longitude}
        </p>
      )}
    </DisplayDemo>
  );
};

<GeoReporter />;
```

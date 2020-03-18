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

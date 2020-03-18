# useGeolocation

Возвращает массив, в котором первым элементом является состояние геолокации из [useGeolocationState] (./ useGeolocation.md).
а второй является объектом установщиков обработчиков (handler setters) из [useGeolocationEvents] (./ useGeolocationEvents).

Он предназначен для быстрого доступа к этим крючкам.

### 💡 Зачем?

- позволяют легко получить доступ к [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- заботится о добавлении слушателей событий геолокации
- заботится о чистке слушателя, когда компонент размонтируется (component will unmount)
- позволяют выполнять абстракции на событиях, связанных с геолокацией

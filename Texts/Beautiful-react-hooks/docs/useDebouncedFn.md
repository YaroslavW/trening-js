# useDebounceFn

Принимает `func` и возвращает новую запомненную версию этой функции, которая задерживает вызов`func` до определенного
время, прошедшее с того момента, когда последний раз вызывалась функция debounce.

Если время не определено, его значение по умолчанию будет 100 мс.
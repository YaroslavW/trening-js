# useLifecycle

Принимает две функции, которые должны быть выполнены в течение жизненного цикла компонента.

Первый будет запущен после того, как **component did mount**, второй сразу перед **component unmounts**.

### 💡 Зачем?

- Включает "lifecycle hooks", такие как `useDidMount` и`useWillUnmount`;
- Это как ярлык для `useEffect (onMount, [])` и `useEffect (() => () => willUnmount, [])`;

### Основное использование

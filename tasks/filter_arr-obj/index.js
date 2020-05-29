let todos = [
  {
    title: "JS",
    completed: true,
  },
  {
    title: "PHP",
    completed: false,
  },
  {
    title: "React",
    completed: true,
  },
  {
    title: "Vue",
    completed: false,
  },
];

let completedTodo = todos.filter((todo) => !todo.completed);
console.log(completedTodo);
// [
//   { title: "PHP", completed: false },
//   { title: "Vue", completed: false },
// ];
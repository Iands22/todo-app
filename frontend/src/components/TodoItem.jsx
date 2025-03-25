import { useState } from "react";

export default function TodoItem({ todo }) {
  const [todoState, setTodoState] = useState(todo.todoState);

  function handleChange() {
    setTodoState(!todoState);
  }

  function handleClick() {}
  console.log(`${todo.todoName} ${todo.todoState}`);

  return (
    <li>
      <span>{todo.todoName}</span>
      <input
        type="checkbox"
        name="check-todo"
        id="check-todo"
        onChange={(e) => handleChange(e)}
        checked={todoState}
      />
      <button onClick={() => handleClick()}>Supprimer</button>
    </li>
  );
}

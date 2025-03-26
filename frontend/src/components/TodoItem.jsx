import { useState } from "react";
import UpdateTodoModal from "./UpdateTodoModal";

export default function TodoItem({ todo }) {
  const [todoState, setTodoState] = useState(todo.todoState);
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setTodoState(!todoState);
  }

  function handleClick(e) {
    e.stopPropagation();
    console.log(`${todo.todoName} ${todo.todoState}`);
  }


  return (
    <>
      <li onClick={() => setIsOpen(true)}>
        <span>{todo.todoName}</span>
        <input
          type="checkbox"
          name="check-todo"
          id="check-todo"
          onChange={(e) => handleChange(e)}
          checked={todoState}
          onClick={(e) => e.stopPropagation()}
        />
        <button onClick={(e) => handleClick(e)}>Supprimer</button>
      </li>
      <UpdateTodoModal isOpen={isOpen} setIsOpen={setIsOpen} todo={todo} />
    </>
  );
}

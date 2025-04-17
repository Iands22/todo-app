import { useRef, useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function AddTodoForm() {
  const [info, setInfo] = useState("");
  const { addTodo } = useTodos();
  const inputRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setInfo("");
    }, 3000);
  }, [info]);

  async function createTodo(e) {
    e.preventDefault();
    const todoName = inputRef.current.value;
    if (todoName.trim()) {
      await addTodo(todoName.trim());
      inputRef.current.value = "";
      setInfo("Tâche ajoutée");
    } else {
      setInfo("Le nom de la tâche ne doit pas être vide");
    }
  }

  return (
    <div className="mx-4 mb-3">
      <form className="flex items-center gap-2 w-full max-w-sm">
        <div className="w-full max-w-sm min-w-[200px]">
          <input
            className="input-style flex-1"
            placeholder="Ajouter..."
            ref={inputRef}
            type="text"
            name="todo-name"
            id="todo-name"
          />
        </div>
        <button onClick={(e) => createTodo(e)}>
          <PlusIcon className="m-2 size-7 bg-emerald-700 text-white hover:bg-emerald-800 transition" />
        </button>
      </form>
      <div className="h-8">
        {info == "Tâche ajoutée" ? (
          <span className="text-emerald-700">{info}</span>
        ) : (
          <span className="text-red-700">{info}</span>
        )}
      </div>
    </div>
  );
}

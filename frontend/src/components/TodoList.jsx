import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function TodoList() {
  const [searchTerm, setSearchTerm] = useState("");
  const { todos } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  useEffect(() => {
    const filterResult = todos.filter((todo) =>
      todo.todoName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filterResult);
  }, [searchTerm, todos]);

  const todosDone = filteredTodos.filter((todo) => todo.isDone);
  const todosUndone = filteredTodos.filter((todo) => !todo.isDone);

  return (
    <div className="mx-4">
      <h1 className="mb-5 text-2xl text-gray-800 text-left">
        Liste des tâches
      </h1>
      {/*Search Bar*/}
      <form className="mb-4">
        <div className="w-full max-w-sm min-w-[200px] ">
          <div className="relative">
            <input
              type="text"
              name="search-todo"
              id="search-todo"
              placeholder="Chercher..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-style"
            />
            <MagnifyingGlassIcon className="absolute w-5 h-5 top-2 right-2 text-slate-600" />
          </div>
        </div>
      </form>
      <ul className="flex flex-col gap-2">
        {todosUndone.map((todo) => (
          <TodoItem key={todo.todoId} todo={todo} />
        ))}
      </ul>
      {todosDone.length > 0 && (
        <>
          <h2 className="mt-6 text-md text-gray-800 font-bold">
            Tâches terminées
          </h2>
          <ul>
            {todosDone.map((todo) => (
              <TodoItem key={todo.todoId} todo={todo} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

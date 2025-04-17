import { useState } from "react";
import UpdateTodoModal from "./UpdateTodoModal";
import { useTodos } from "../context/TodoContext";
import { TrashIcon } from "@heroicons/react/24/solid";
import ModalConfirmation from "./ModalConfirmation";

export default function TodoItem({ todo }) {
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const { deleteTodo, updateTodo } = useTodos();

  const todoNameStyle = todo.isDone ? "text-sm line-through" : "";
  const iconDeleteStyle = todo.isDone
    ? "mx-1 size-5 text-gray-700"
    : "mx-1 size-6 text-red-700";

  async function setTodoDone() {
    const updatedData = {
      todoName: todo.todoName,
      isDone: !todo.isDone,
    };
    await updateTodo(todo.todoId, updatedData);
  }

  async function handleDelete() {
    await deleteTodo(todo.todoId)
  }
  function openModalConfirmation(e) {
    e.stopPropagation();
    setIsOpenModalDelete(true)
  }

  return (
    <>
      <li className="todo-style" onClick={() => setIsOpenModalUpdate(true)}>
        <span className={todoNameStyle}>{todo.todoName}</span>
        <div className="flex items-center">
          {!todo.isDone ? (
            <input
              type="checkbox"
              name="check-todo"
              id="check-todo"
              className="size-5"
              onChange={() => setTodoDone()}
              checked={todo.isDone}
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <span></span>
          )}
          <button className="ml-3" onClick={(e) => openModalConfirmation(e)}>
            <TrashIcon className={iconDeleteStyle} />
          </button>
        </div>
      </li>
      <UpdateTodoModal
        isOpen={isOpenModalUpdate}
        setIsOpen={setIsOpenModalUpdate}
        todo={todo}
      />
      <ModalConfirmation
        isOpen={isOpenModalDelete}
        setIsOpen={setIsOpenModalDelete}
        deleteTodo={handleDelete}
      />
    </>
  );
}

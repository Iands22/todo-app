import { useRef, useState, useEffect } from "react";
import { useTodos } from "../context/TodoContext";

export default function UpdateTodoModal({ isOpen, setIsOpen, todo }) {
  const [info, setInfo] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const inputRef = useRef(null);
  const { updateTodo } = useTodos();

  useEffect(() => {
    if (info) {
      setTimeout(() => {
        setInfo("");
        setIsDisabled(false);
      }, 3000);
    }
  }, [info]);

  async function putTodo() {
    const todoName = inputRef.current.value.trim();
    if (todoName.trim()) {
      await updateTodo(todo.todoId, { todoName: todoName });
      setIsOpen(false);
    } else {
      setInfo("Le nom de la tâche ne doit pas être vide");
      setIsDisabled(true);
    }
  }

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center px-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Modifier la tâche</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="secondary-button"
              >
                X
              </button>
            </div>
            <p className="mt-2 text-gray-600">
              <input
                type="text"
                name=""
                id=""
                defaultValue={todo.todoName}
                ref={inputRef}
                className="input-style"
              />
            </p>

            <div className="mt-4">
              <div className="mb-2">
                <span className="text-red-600">{info}</span>
              </div>
              <div className="flex justify-evenly items-center">
                <button
                  className="secondary-button"
                  onClick={() => setIsOpen(false)}
                >
                  Annuler
                </button>
                {isDisabled ? (
                  <button
                    onClick={() => putTodo()}
                    className="primary-button"
                    disabled
                  >
                    Enregistrer
                  </button>
                ) : (
                  <button
                    onClick={() => putTodo()}
                    className="primary-button"
                  >
                    Enregistrer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

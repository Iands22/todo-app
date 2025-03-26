export default function UpdateTodoModal({ isOpen, setIsOpen, todo }) {
  function updateTodo() {}

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Modifier la tâche</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-700 text-white rounded-lg"
              >
                X
              </button>
            </div>
            <p className="mt-2 text-gray-600">
              <input type="text" name="" id="" value={todo.todoName} />
            </p>

            {/* Boutons */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => updateTodo()}
                className="px-4 py-2 bg-emerald-700 text-white rounded-lg"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

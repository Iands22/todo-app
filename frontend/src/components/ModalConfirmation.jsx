export default function ModalConfirmation({ isOpen, setIsOpen, deleteTodo }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center px-4 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md opacity-100">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                Confirmer la suppression
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="secondary-button"
              >
                X
              </button>
            </div>
            <p className="mt-2 text-gray-600">
              Voulez-vous supprimer définitivement la tâche ?
            </p>

            {/* Boutons */}
            <div className="mt-4 flex justify-evenly items-center">
              <button
                className="secondary-button"
                onClick={() => setIsOpen(false)}
              >
                Annuler
              </button>
              <button
                className="danger-button"
                onClick={() => deleteTodo()}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

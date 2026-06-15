export default function ModalDelete({ movieTitle, onConfirm, onCancel, isLoading }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 max-w-sm w-full mx-4">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <h3 className="text-xl font-bold text-white">Confirmar Exclusão</h3>
        </div>

        <p className="text-slate-300 mb-6">
          Tem certeza que deseja deletar <span className="font-bold text-red-400">"{movieTitle}"</span>?
          <br />
          <span className="text-sm text-slate-400">Esta ação não pode ser desfeita.</span>
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            disabled={isLoading}
            className="flex-1 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            {isLoading ? 'Deletando...' : 'Deletar'}
          </button>
        </div>
      </div>
    </div>
  );
}

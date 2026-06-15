import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Pesquisar por título..."
        className="flex-1 px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
      >
        Buscar
      </button>
      {searchTerm && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-6 rounded transition-colors duration-200"
        >
          Limpar
        </button>
      )}
    </form>
  );
}

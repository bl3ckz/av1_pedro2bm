import { useState } from 'react';

export default function MovieCard({ movie, onEdit, onDelete }) {
  const [showDetails, setShowDetails] = useState(false);

  const getRatingColor = (nota) => {
    if (nota >= 8) return 'text-green-400';
    if (nota >= 6) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-700">
      {/* Imagem do Filme */}
      <div className="relative h-64 bg-gradient-to-b from-slate-700 to-slate-900 overflow-hidden group">
        {movie.imagem ? (
          <img
            src={movie.imagem}
            alt={movie.titulo}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              className="w-20 h-20 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 4v16m10-16v16M7 10h10M7 14h10"
              />
            </svg>
          </div>
        )}
        
        {/* Badge de Disponibilidade */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              movie.disponivel
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {movie.disponivel ? 'Disponível' : 'Indisponível'}
          </span>
        </div>

        {/* Classificação */}
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 px-2 py-1 rounded">
          <span className="text-xs font-bold text-white">{movie.classificacao}</span>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-1 truncate hover:text-red-400">
          {movie.titulo}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-slate-400">{movie.genero}</p>
          <div className="flex items-center gap-1">
            <svg className={`w-4 h-4 ${getRatingColor(movie.nota)}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className={`text-sm font-bold ${getRatingColor(movie.nota)}`}>
              {movie.nota?.toFixed(1)}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-500 mb-2">
          <span className="font-semibold">Diretor:</span> {movie.diretor}
        </p>

        <p className="text-xs text-slate-500 mb-3">
          <span className="font-semibold">{movie.anoLancamento}</span> • {movie.duracao} min
        </p>

        {showDetails && movie.descricao && (
          <p className="text-xs text-slate-400 mb-3 line-clamp-3">{movie.descricao}</p>
        )}

        {showDetails && movie.elenco && (
          <p className="text-xs text-slate-500 mb-3">
            <span className="font-semibold text-slate-400">Elenco:</span> {movie.elenco}
          </p>
        )}

        {/* Botões */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded text-sm transition-colors duration-200"
          >
            {showDetails ? 'Menos' : 'Detalhes'}
          </button>
          <button
            onClick={() => onEdit(movie.id)}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-2 px-3 rounded text-sm transition-colors duration-200"
          >
            Editar
          </button>
          <button
            onClick={() => onDelete(movie.id)}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded text-sm transition-colors duration-200"
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

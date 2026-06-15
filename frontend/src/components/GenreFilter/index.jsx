const generos = [
  'Ação',
  'Aventura',
  'Comédia',
  'Comédia Romântica',
  'Drama',
  'Ficção Científica',
  'Fantasia',
  'Terror',
  'Suspense',
  'Mistério',
  'Animação',
  'Documentário',
  'Romance',
  'Crime',
  'Guerra',
  'Musical',
  'Super-Herói',
  'Anime',
  'Biografia',
  'Família',
  'Pós-Apocalíptico',
];

export default function GenreFilter({ selectedGenre, onGenreChange }) {
  return (
    <div className="mb-6">
      <h3 className="text-white font-bold mb-3">Filtrar por Gênero</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        <button
          onClick={() => onGenreChange('')}
          className={`px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 ${
            selectedGenre === ''
              ? 'bg-red-600 text-white'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          Todos
        </button>
        {generos.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre)}
            className={`px-4 py-2 rounded text-sm font-semibold transition-colors duration-200 ${
              selectedGenre === genre
                ? 'bg-red-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import api from '../../services/api';

export default function MovieDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Filme não encontrado: ' + (err.response?.data?.erro || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <Loading />;

  if (!movie) {
    return (
      <div className="container mx-auto px-4 py-10">
        {error && <ErrorMessage message={error} onClose={() => navigate('/filmes')} />}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <button
        onClick={() => navigate('/filmes')}
        className="mb-6 text-red-400 hover:text-red-300 font-semibold transition-colors"
      >
        ← Voltar
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Imagem */}
        <div>
          {movie.imagem ? (
            <img
              src={movie.imagem}
              alt={movie.titulo}
              className="w-full rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-full aspect-square bg-slate-700 rounded-lg flex items-center justify-center">
              <svg className="w-24 h-24 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4v16m10-16v16M7 10h10M7 14h10" />
              </svg>
            </div>
          )}
        </div>

        {/* Detalhes */}
        <div className="md:col-span-2">
          <h1 className="text-4xl font-black text-white mb-4">{movie.titulo}</h1>

          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-slate-400 text-sm mb-1">Gênero</p>
                <p className="text-white font-semibold">{movie.genero}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Diretor</p>
                <p className="text-white font-semibold">{movie.diretor}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Ano de Lançamento</p>
                <p className="text-white font-semibold">{movie.anoLancamento}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-1">Duração</p>
                <p className="text-white font-semibold">{movie.duracao} minutos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-bold text-lg">{movie.nota?.toFixed(1)}/10</span>
              </div>

              <span
                className={`px-4 py-2 rounded-full font-bold text-sm ${
                  movie.disponivel
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {movie.disponivel ? 'Disponível' : 'Indisponível'}
              </span>

              <span className="bg-slate-700 text-slate-300 px-4 py-2 rounded font-semibold text-sm">
                {movie.classificacao}
              </span>
            </div>

            {movie.descricao && (
              <div className="mb-4">
                <p className="text-slate-400 text-sm mb-2">Sinopse</p>
                <p className="text-slate-200 leading-relaxed">{movie.descricao}</p>
              </div>
            )}

            {movie.elenco && (
              <div>
                <p className="text-slate-400 text-sm mb-2">Elenco</p>
                <p className="text-slate-200">{movie.elenco}</p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => navigate(`/editar/${movie.id}`)}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold py-3 px-6 rounded transition-colors"
            >
              Editar Filme
            </button>
            <button
              onClick={() => navigate('/filmes')}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

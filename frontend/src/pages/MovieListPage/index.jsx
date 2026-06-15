import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../../components/SearchBar';
import GenreFilter from '../../components/GenreFilter';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import ModalDelete from '../../components/ModalDelete';
import api from '../../services/api';

export default function MovieListPage() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteModal, setDeleteModal] = useState({ open: false, movieId: null, title: '', loading: false });

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await api.get('/movies');
      setMovies(response.data || []);
    } catch (err) {
      setError('Erro ao carregar filmes: ' + (err.response?.data?.erro || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (term) => {
    setSearchTerm(term);
    setSelectedGenre('');
    setLoading(true);
    setError('');

    try {
      if (term.trim()) {
        const response = await api.get(`/movies/search/${term}`);
        setMovies(response.data || []);
      } else {
        await loadMovies();
      }
    } catch (err) {
      setError('Erro ao pesquisar: ' + (err.response?.data?.erro || err.message));
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreFilter = async (genre) => {
    setSelectedGenre(genre);
    setSearchTerm('');
    setLoading(true);
    setError('');

    try {
      if (genre.trim()) {
        const response = await api.get(`/movies/genre/${genre}`);
        setMovies(response.data || []);
      } else {
        await loadMovies();
      }
    } catch (err) {
      setError('Erro ao filtrar: ' + (err.response?.data?.erro || err.message));
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/editar/${id}`);
  };

  const handleDeleteClick = (id, title) => {
    setDeleteModal({ open: true, movieId: id, title, loading: false });
  };

  const handleDeleteConfirm = async () => {
    setDeleteModal((prev) => ({ ...prev, loading: true }));
    try {
      await api.delete(`/movies/${deleteModal.movieId}`);
      setMovies((prev) => prev.filter((m) => m.id !== deleteModal.movieId));
      setDeleteModal({ open: false, movieId: null, title: '', loading: false });
    } catch (err) {
      setError('Erro ao deletar: ' + (err.response?.data?.erro || err.message));
      setDeleteModal((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-4xl font-black text-white">Meus Filmes</h1>
        <button
          onClick={() => navigate('/novo')}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200 w-full sm:w-auto"
        >
          + Novo Filme
        </button>
      </div>

      {error && <ErrorMessage message={error} onClose={() => setError('')} />}

      <SearchBar onSearch={handleSearch} />
      <GenreFilter selectedGenre={selectedGenre} onGenreChange={handleGenreFilter} />

      {loading ? (
        <Loading />
      ) : movies.length === 0 ? (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16m10-16v16M7 10h10M7 14h10" />
          </svg>
          <p className="text-slate-400 text-lg mb-4">
            {searchTerm ? 'Nenhum filme encontrado na busca.' : 'Nenhum filme encontrado.'}
          </p>
          <button
            onClick={() => navigate('/novo')}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
          >
            Adicionar Primeiro Filme
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
            />
          ))}
        </div>
      )}

      {deleteModal.open && (
        <ModalDelete
          movieTitle={deleteModal.title}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setDeleteModal({ open: false, movieId: null, title: '', loading: false })}
          isLoading={deleteModal.loading}
        />
      )}
    </div>
  );
}

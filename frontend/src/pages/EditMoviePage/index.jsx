import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MovieForm from '../../components/MovieForm';
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import api from '../../services/api';

export default function EditMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Erro ao carregar o filme: ' + (err.response?.data?.erro || err.message));
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    setError('');

    try {
      await api.put(`/movies/${id}`, formData);
      navigate('/filmes');
    } catch (err) {
      setError('Erro ao atualizar: ' + (err.response?.data?.erro || err.message));
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-black text-white mb-8">Editar Filme</h1>

      {error && <ErrorMessage message={error} onClose={() => setError('')} />}

      {movie && (
        <MovieForm
          onSubmit={handleSubmit}
          initialData={movie}
          isLoading={submitting}
        />
      )}
    </div>
  );
}

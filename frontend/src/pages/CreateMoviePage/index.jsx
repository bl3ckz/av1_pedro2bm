import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieForm from '../../components/MovieForm';
import ErrorMessage from '../../components/ErrorMessage';
import api from '../../services/api';

export default function CreateMoviePage() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (formData) => {
    setSubmitting(true);
    setError('');

    try {
      await api.post('/movies', formData);
      navigate('/filmes');
    } catch (err) {
      const errorData = err.response?.data;
      if (errorData?.erros) {
        setError(errorData.erros.join(', '));
      } else {
        setError('Erro ao criar filme: ' + (errorData?.erro || err.message));
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-black text-white mb-8">Adicionar Novo Filme</h1>

      {error && <ErrorMessage message={error} onClose={() => setError('')} />}

      <MovieForm onSubmit={handleSubmit} isLoading={submitting} />
    </div>
  );
}

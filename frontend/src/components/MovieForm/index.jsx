import { useState } from 'react';

export default function MovieForm({ onSubmit, initialData = null, isLoading = false }) {
  const [formData, setFormData] = useState(
    initialData || {
      titulo: '',
      genero: 'Ação',
      descricao: '',
      diretor: '',
      elenco: '',
      duracao: '',
      anoLancamento: new Date().getFullYear(),
      classificacao: '12 anos',
      imagem: '',
      nota: 5,
      disponivel: true,
    }
  );

  const [errors, setErrors] = useState([]);

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

  const classificacoes = ['Livre', 'L', '10 anos', '12 anos', '14 anos', '16 anos', '18 anos'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const newErrors = [];
    if (!formData.titulo.trim()) newErrors.push('Título é obrigatório');
    if (!formData.diretor.trim()) newErrors.push('Diretor é obrigatório');
    if (!formData.duracao) newErrors.push('Duração é obrigatória');
    if (!formData.anoLancamento) newErrors.push('Ano de lançamento é obrigatório');
    if (formData.nota < 0 || formData.nota > 10) newErrors.push('Nota deve estar entre 0 e 10');

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
      <h2 className="text-2xl font-bold text-white mb-6">
        {initialData ? 'Editar Filme' : 'Novo Filme'}
      </h2>

      {/* Mensagens de Erro */}
      {errors.length > 0 && (
        <div className="mb-4 p-4 bg-red-900 bg-opacity-50 border border-red-600 rounded">
          <ul className="text-red-200 text-sm">
            {errors.map((error, idx) => (
              <li key={idx}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Título */}
      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Título *</label>
        <input
          type="text"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
          placeholder="Nome do filme"
        />
      </div>

      {/* Grid 2 colunas */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Gênero */}
        <div>
          <label className="block text-white font-semibold mb-2">Gênero *</label>
          <select
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
          >
            {generos.map((gen) => (
              <option key={gen} value={gen}>
                {gen}
              </option>
            ))}
          </select>
        </div>

        {/* Diretor */}
        <div>
          <label className="block text-white font-semibold mb-2">Diretor *</label>
          <input
            type="text"
            name="diretor"
            value={formData.diretor}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
            placeholder="Nome do diretor"
          />
        </div>
      </div>

      {/* Grid 3 colunas */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* Duração */}
        <div>
          <label className="block text-white font-semibold mb-2">Duração (min) *</label>
          <input
            type="number"
            name="duracao"
            value={formData.duracao}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
            placeholder="120"
          />
        </div>

        {/* Ano Lançamento */}
        <div>
          <label className="block text-white font-semibold mb-2">Ano Lançamento *</label>
          <input
            type="number"
            name="anoLancamento"
            value={formData.anoLancamento}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
            placeholder="2024"
          />
        </div>

        {/* Nota */}
        <div>
          <label className="block text-white font-semibold mb-2">Nota (0-10)</label>
          <input
            type="number"
            name="nota"
            min="0"
            max="10"
            step="0.1"
            value={formData.nota}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
            placeholder="7.5"
          />
        </div>
      </div>

      {/* Elenco */}
      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Elenco</label>
        <input
          type="text"
          name="elenco"
          value={formData.elenco}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
          placeholder="Ator 1, Ator 2, Ator 3"
        />
      </div>

      {/* Descrição */}
      <div className="mb-4">
        <label className="block text-white font-semibold mb-2">Descrição</label>
        <textarea
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none h-24 resize-none"
          placeholder="Sinopse do filme"
        />
      </div>

      {/* Grid 2 colunas */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Classificação */}
        <div>
          <label className="block text-white font-semibold mb-2">Classificação Indicativa</label>
          <select
            name="classificacao"
            value={formData.classificacao}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
          >
            {classificacoes.map((class_) => (
              <option key={class_} value={class_}>
                {class_}
              </option>
            ))}
          </select>
        </div>

        {/* URL Imagem */}
        <div>
          <label className="block text-white font-semibold mb-2">URL da Imagem</label>
          <input
            type="text"
            name="imagem"
            value={formData.imagem}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-red-500 focus:outline-none"
            placeholder="https://..."
          />
        </div>
      </div>

      {/* Disponível */}
      <div className="mb-6 flex items-center">
        <input
          type="checkbox"
          name="disponivel"
          checked={formData.disponivel}
          onChange={handleChange}
          className="w-4 h-4 rounded"
        />
        <label className="ml-3 text-white font-semibold">Filme disponível</label>
      </div>

      {/* Botões */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white font-bold py-3 px-4 rounded transition-colors duration-200"
        >
          {isLoading ? 'Salvando...' : initialData ? 'Atualizar' : 'Criar Filme'}
        </button>
      </div>
    </form>
  );
}

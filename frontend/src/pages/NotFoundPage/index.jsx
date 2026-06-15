import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-black text-red-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-white mb-2">Página não encontrada</h1>
          <p className="text-slate-400 text-lg mb-8">
            Desculpe, a página que você procura não existe ou foi movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Voltar à Início
          </Link>
          <Link
            to="/filmes"
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 border border-slate-600"
          >
            Ver Filmes
          </Link>
        </div>

        <div className="mt-16 text-slate-500">
          <svg className="w-32 h-32 mx-auto opacity-20" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

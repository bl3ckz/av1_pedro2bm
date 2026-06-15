import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Bem-vindo ao
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              PedroCine
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Seu catálogo completo de filmes. Organize, gerencie e descubra seus filmes favoritos em uma plataforma
            moderna e intuitiva, inspirada nas maiores plataformas de streaming do mundo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/filmes"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              Explorar Filmes
            </Link>
            <Link
              to="/novo"
              className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 border border-slate-600"
            >
              Adicionar Filme
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Recursos Principais</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-red-600 transition-colors duration-200">
            <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Catálogo Completo</h3>
            <p className="text-slate-400">
              Mantenha todos os seus filmes em um único lugar com informações detalhadas de cada um.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-red-600 transition-colors duration-200">
            <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V10M14 4.5v2.25m-4.5 0v2.25m0-8V3m4.5 10.5L10 14m0 0L8.5 15.5m1.5-1.5l1.5 1.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Pesquisa Avançada</h3>
            <p className="text-slate-400">
              Busque filmes por título ou filtre por gênero para encontrar exatamente o que procura.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-lg hover:border-red-600 transition-colors duration-200">
            <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Gerenciar Facilmente</h3>
            <p className="text-slate-400">
              Adicione, edite ou delete filmes com uma interface intuitiva e responsiva.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20 border-t border-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">20+</div>
            <p className="text-slate-400">Gêneros Diferentes</p>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">Ilimitado</div>
            <p className="text-slate-400">Filmes para Catalogar</p>
          </div>
          <div>
            <div className="text-4xl font-black text-red-600 mb-2">100%</div>
            <p className="text-slate-400">Moderno e Responsivo</p>
          </div>
        </div>
      </section>
    </div>
  );
}

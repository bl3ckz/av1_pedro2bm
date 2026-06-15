export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PedroCine</h3>
            <p className="text-slate-400 text-sm">
              Sistema de catálogo de filmes com interface moderna e intuitiva. Gerenciamento completo de sua coleção de filmes favoritos.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li>
                <a href="/" className="hover:text-red-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/#filmes" className="hover:text-red-400 transition-colors">
                  Filmes
                </a>
              </li>
              <li>
                <a href="/#novo" className="hover:text-red-400 transition-colors">
                  Novo Filme
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Conecte-se</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-red-400 transition-colors"
                title="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.29 20a11.075 11.075 0 005.57-1.694.5.5 0 00-.16-.902c-1.235.207-2.451.327-3.656.327-4.417 0-8.606-1.716-11.727-4.836A11.74 11.74 0 0020 8.29c0-1.205-.12-2.421-.327-3.656a.5.5 0 00-.902.16A11.075 11.075 0 0115.694 8.29" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-400 transition-colors"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.879V12.89h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.989C16.343 19.129 20 14.99 20 10c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-red-400 transition-colors"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm5.066 10.313c0 2.88-2.33 5.207-5.207 5.207s-5.207-2.327-5.207-5.207 2.33-5.207 5.207-5.207 5.207 2.327 5.207 5.207zm.953-5.338c0 .678-.551 1.229-1.229 1.229s-1.229-.551-1.229-1.229.551-1.229 1.229-1.229 1.229.551 1.229 1.229z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm">
              &copy; 2024 PedroCine. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm mt-4 md:mt-0">
              <a href="#" className="hover:text-red-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

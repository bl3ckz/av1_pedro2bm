import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 border-b-4 border-red-600 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg
                className="w-10 h-10 text-red-600 group-hover:text-red-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16m10-16v16M7 10h10M7 14h10"
                />
              </svg>
              <div className="absolute inset-0 bg-red-600 opacity-10 rounded-full blur-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">Pedro</h1>
              <p className="text-yellow-400 text-xs font-bold tracking-widest">CINE</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-slate-300 hover:text-red-400 font-semibold transition-colors duration-200"
            >
              Início
            </a>
            <a
              href="/#filmes"
              className="text-slate-300 hover:text-red-400 font-semibold transition-colors duration-200"
            >
              Filmes
            </a>
            <a
              href="/novo"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded transition-colors duration-200"
            >
              + Novo Filme
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-red-400 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-700 pt-4 flex flex-col gap-4">
            <a
              href="/"
              className="text-slate-300 hover:text-red-400 font-semibold transition-colors duration-200"
            >
              Início
            </a>
            <a
              href="/#filmes"
              className="text-slate-300 hover:text-red-400 font-semibold transition-colors duration-200"
            >
              Filmes
            </a>
            <a
              href="/novo"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-2 rounded text-center transition-colors duration-200"
            >
              + Novo Filme
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
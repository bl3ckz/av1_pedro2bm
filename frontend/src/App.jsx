import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MovieListPage from './pages/MovieListPage';
import CreateMoviePage from './pages/CreateMoviePage';
import EditMoviePage from './pages/EditMoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-900">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/filmes" element={<MovieListPage />} />
            <Route path="/novo" element={<CreateMoviePage />} />
            <Route path="/editar/:id" element={<EditMoviePage />} />
            <Route path="/filme/:id" element={<MovieDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
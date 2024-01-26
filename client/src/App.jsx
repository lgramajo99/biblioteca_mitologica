import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ArticlePost from './components/admin/ArticlePost';
import Directory from './pages/Directory';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/admin/Dashboard';
import Login from './components/admin/Login';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/administracion');

  return (
    <div>
      {!isAdminRoute && <Navbar />}

      <Login />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/article" element={<ArticlePost />} />
        <Route path="/articulo-prueba" element={<ArticleContainer />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/administracion/*" element={<Dashboard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
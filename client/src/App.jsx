import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Directory from './pages/Directory';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/admin/Dashboard';
import Login from './components/admin/Login';
// ----------Imports de los page dashboards----------
import SeccionUno from './components/admin/SeccionUno';
import SeccionDos from './components/admin/SeccionDos';
import ArticlePost from './components/admin/ArticlePost';
import ListCategories from './components/dashboard/ListCategories';
import ListPost from './components/dashboard/ListPost';
import Calendar from './components/dashboard/Calendar';

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

        <Route path="/administracion" element={<Dashboard />} >
          <Route path="seccion-1" element={<SeccionUno />} />
          <Route path="seccion-2" element={<SeccionDos />} />
          <Route path="crear-publicacion" element={<ArticlePost />} />
          <Route path="lista-categorias" element={<ListCategories />} />
          <Route path="lista-publicaciones" element={<ListPost />} />
          <Route path="calendario" element={<Calendar />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
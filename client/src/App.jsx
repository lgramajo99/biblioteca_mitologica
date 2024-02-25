import { Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Directory from './pages/Directory';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Dashboard from './pages/Dashboard';
import Login from './components/common/Login';
// ----------Imports de los page dashboards----------
import ArticlePost from './components/dashboard/pages/ArticlePost';
import ListCategories from './components/dashboard/pages/ListCategories';
import ListPost from './components/dashboard/pages/ListPost';
import Calendar from './components/dashboard/pages/Calendar';
import PostEditor from './components/dashboard/pages/PostEditor';

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
          <Route path="crear-publicacion" element={<PostEditor />} />
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
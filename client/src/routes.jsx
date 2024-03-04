import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ArticleContainer from './pages/ArticleContainer';
import Biblioteca from './pages/Biblioteca';
import Calendar from './components/dashboard/pages/Calendar';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ListCategories from './components/dashboard/pages/ListCategories';
import ListPost from './components/dashboard/pages/ListPost';
import PostEditor from './components/dashboard/pages/PostEditor';
import { useAuthActions } from './redux/actions/authAction';

const RoutesIndex = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/administracion');
    const { isAdmin } = useAuthActions();

    useEffect(() => {
        updateDocumentTitle()
    }, [location])

    const updateDocumentTitle = () => {
        let title = "Biblioteca mitológica";
        const path = location.pathname;

        switch (true) {
            case path.startsWith('/administracion'):
                title = `Panel de administración | ${title}`;
                break;
            case path.startsWith('/biblioteca'):
                title = `Biblioteca | ${title}`;
                break;
            case path.startsWith('/articulo'):
                title = `Artículo | ${title}`;
                break;
            case path === '/':
                title = `Inicio | ${title}`;
                break;
            default:
                title = `No encontrado | ${title}`;
                break;
        }
        document.title = title;
    }

    return (<>
        {!isAdminRoute && <Navbar />}

        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/articulo/:artId" element={<ArticleContainer />} />
            <Route exact path="/biblioteca" element={<Biblioteca />} />
            {isAdmin() && <Route exact path="/administracion" element={<Dashboard />} >
                <Route path="crear-publicacion" element={<PostEditor />} />
                <Route path="lista-categorias" element={<ListCategories />} />
                <Route path="lista-publicaciones" element={<ListPost />} />
                <Route path="calendario" element={<Calendar />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>}

            <Route path="*" element={<ErrorPage />} />
        </Routes>

        {!isAdminRoute && <Footer />}

    </>)
}

export default RoutesIndex;
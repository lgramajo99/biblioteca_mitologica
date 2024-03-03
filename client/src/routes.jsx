import { Routes, Route, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';


const RoutesIndex = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/administracion');

    useEffect(() => {
        updateDocumentTitle
    }, [location])

    const updateDocumentTitle = () => {
        let title = "Biblioteca mitológica";

        switch (location.pathname) {
            case '/administracion':
                title = `Panel de administración | ${title}`;
                break;
            case '/biblioteca':
                title = `Biblioteca | ${title}`;
                break;
            case '/articulo':
                title = `Artículo | ${title}`;
                break;
            default:
                title = `Inicio | ${title}`;
                break;
        }

        document.title = title;
    }

    return (<>
        {!isAdminRoute && <Navbar />}
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/articulo/:artId" element={<ArticleContainer />} />
            <Route path="/biblioteca" element={<Biblioteca />} />
            <Route path="/administracion" element={<DashboardRoutes />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        {!isAdminRoute && <Footer />}

    </>)
}

export default RoutesIndex;

const DashboardRoutes = () => {
    return (<>
        <Dashboard>
            <Route path="crear-publicacion" element={<PostEditor />} />
            <Route path="lista-categorias" element={<ListCategories />} />
            <Route path="lista-publicaciones" element={<ListPost />} />
            <Route path="calendario" element={<Calendar />} />
            <Route path="*" element={<ErrorPage />} />
        </Dashboard>
    </>)
}
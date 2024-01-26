import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from '../Loading';
import ErrorPage from '../../pages/ErrorPage';

const SeccionUno = lazy(() => import('../admin/SeccionUno'));
const SeccionDos = lazy(() => import('../admin/SeccionDos'));
const ArticlePost = lazy(() => import('../admin/ArticlePost'));

const sections = {
    '/administracion/seccion-1': SeccionUno,
    '/administracion/seccion-2': SeccionDos,
    '/administracion/crear-publicacion': ArticlePost,
};

const getSectionComponent = (pathname) => {
    return sections[pathname] || null;
}

function DashboardContent() {
    const { displayedMenu } = useSelector(state => state.admin);
    const location = useLocation();
    const SectionComponent = getSectionComponent(location.pathname);

    return (
        <section className={`bg-slate-300 container w-full h-screen ${displayedMenu ? 'ml-80' : 'ml-20'}`}>
            <h1 className="text-center">Dashboard de los BM</h1>

            <Suspense fallback={<Loading />}>
                {SectionComponent ? <SectionComponent /> : <ErrorPage />}
            </Suspense>
        </section>
    );
}

export default DashboardContent;

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function DashboardContent() {
    const { displayedMenu } = useSelector(state => state.admin);

    return (
        <section className={`bg-slate-300 container w-full h-screen transition-all duration-500 ${displayedMenu ? 'ml-80' : 'ml-20'}`}>
            <h1 className="text-center">Dashboard de los BM</h1>
            <Outlet />
        </section>
    );
}

export default DashboardContent;

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function DashboardContent() {
    const { displayedMenu } = useSelector(state => state.admin);

    return (
        <section className={`container px-2 w-full h-full transition-all duration-500 ${displayedMenu ? 'ml-80' : 'ml-20'}`}>
            <Outlet />
        </section>
    );
}

export default DashboardContent;

import { Routes, Route } from 'react-router-dom';
import DashboardMenu from "../components/dashboard/layout/DashboardMenu";
import DashboardContent from "../components/dashboard/layout/DashboardContent";
import SeccionUno from '../components/SeccionUno';
import SeccionDos from '../components/SeccionDos';

function Dashboard() {

    return (
        <section className="flex">
            <DashboardMenu />
            <DashboardContent/>
        </section>
    )
}

export default Dashboard;
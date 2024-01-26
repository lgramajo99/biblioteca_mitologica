import { Routes, Route } from 'react-router-dom';
import DashboardMenu from "../../components/dashboard/DashboardMenu";
import DashboardContent from "../../components/dashboard/DashboardContent";
import SeccionUno from '../../components/admin/SeccionUno';
import SeccionDos from '../../components/admin/SeccionDos';

function Dashboard() {

    return (
        <section className="flex">
            <DashboardMenu />
            <DashboardContent/>
        </section>
    )
}

export default Dashboard;
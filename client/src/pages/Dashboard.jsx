import DashboardMenu from "../components/dashboard/layout/DashboardMenu";
import DashboardContent from "../components/dashboard/layout/DashboardContent";

function Dashboard() {

    return (
        <section className="flex">
            <DashboardMenu />
            <DashboardContent/>
        </section>
    )
}

export default Dashboard;
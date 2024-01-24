import DashboardMenu from "../../components/dashboard/DashboardMenu";
import DashboardContent from "../../components/dashboard/DashboardContent";

function Dashboard() {

    return (
        <section className="flex">
            <DashboardMenu />
            <DashboardContent />
        </section>
    )
}

export default Dashboard;
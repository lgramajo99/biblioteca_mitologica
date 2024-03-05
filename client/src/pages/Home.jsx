import Asidebar from "../components/layout/Asidebar";
import MainContent from "../components/layout/MainContent";

function Home() {
    return (
        <section className="flex flex-wrap text-center">
            <MainContent />
            <Asidebar />
        </section >
    )
}

export default Home;
import Asidebar from "../components/layout/Asidebar";
import Manufactures from "../components/layout/Manufactures";

function Home() {
    return (
        <section className="flex flex-wrap text-center">
            <article className="w-full md:w-9/12 lg:w-10/12 p-3">
                <Manufactures seccion={'Mas recientes'} />
                <Manufactures seccion={'Mas vistos'} />
            </article>
            <Asidebar />
        </section >
    )
}

export default Home;
import Asidebar from "../components/layout/AsideBar";
import Manufactures from "../components/layout/Manufactures";

function Home() {
    return (
        <section className="text-center">
            <header>
                <h1>Biblioteca Mitológica</h1>
            </header>
            
            <section className="flex flex-wrap">
                <article className="w-full md:w-9/12 lg:w-10/12">
                    <Manufactures seccion={'Mas recientes'} />
                    <Manufactures seccion={'Mas vistos'} />
                </article>
                <aside className="w-0 md:w-3/12 lg:w-2/12">
                    <Asidebar />
                </aside>
            </section >
        </section>
    )
}

export default Home;
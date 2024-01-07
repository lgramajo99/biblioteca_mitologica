import AsideBar from "../components/AsideBar";
import Manufactures from "../components/Manufactures";
import Login from "../components/admin/Login";

function Home() {
    return (
        <section className="text-center sm:">
            <h1 className="">Biblioteca mitologica</h1>
            <section className="flex flex-wrap">

                <Login />

                <article className="sm:w-full md:w-9/12 lg:w-10/12">
                    <Manufactures seccion={'Mas recientes'} />
                    <Manufactures seccion={'Mas vistos'} />
                </article>
                <aside className="md:w-3/12 lg:w-2/12">
                    <AsideBar />
                </aside>
            </section >
        </section>
    )
}

export default Home;
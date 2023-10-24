import Card from "../components/Card";
import Manufactures from "../components/Manufactures";

function Home() {
    return (
        <section className="text-center sm:">
            <h1 className="">Biblioteca mitologica</h1>
            <secction className="flex flex-wrap">

                <article className="sm:w-full md:w-9/12 lg:w-10/12">
                    <Manufactures seccion={'Mas recientes'} />
                    <Manufactures seccion={'Mas vistos'} />
                </article>
                <aside className="md:w-3/12 lg:w-2/12">
                    Lista de mitologias
                    <ul>
                        <li>Mitol - #1</li>
                        <li>Mitol - #2</li>
                        <li>Mitol - #3</li>
                        <li>Mitol - #4</li>
                        <li>Mitol - #5</li>
                        <li>Mitol - #6</li>
                        <li>Mitol - #7</li>
                        <li>Mitol - #8</li>
                        <li>Mitol - #9</li>
                        <li>Mitol - #0</li>
                    </ul>
                </aside>
            </secction >
        </section>
    )
}
export default Home;
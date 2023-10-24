import Card from "../components/Card";
import Manufactures from "../components/Manufactures";

function Home() {
    return (
        <section className="text-center">
            <h1 className="">Biblioteca mitologica</h1>
            <aside>

                <Manufactures seccion={'Mas recientes'} />

                <Manufactures seccion='Mas vistos' />
            </aside>


            <aside>
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
        </section>
    )
}
export default Home;
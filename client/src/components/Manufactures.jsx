import Card from "./Card";

function Manufactures({ seccion }) {
    const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

    return (
        <section>
            <h1>Seccion articulos: {seccion}</h1>

            <article className="grid grid-cols-3">
                {cards.map((card) => card)}
            </article>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver mas articulos
            </button>
        </section >
    )
}

export default Manufactures;
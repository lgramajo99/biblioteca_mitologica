import Card from "./Card";

function Manufactures({ seccion }) {
    const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />]

    return (
        <section>
            <h1>Seccion articulos: {seccion}</h1>

            <article className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cards.map((card, index) => <div key={index}><Card /></div>)}
            </article>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver mas articulos
            </button>
        </section >
    )
}

export default Manufactures;
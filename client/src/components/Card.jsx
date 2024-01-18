
function Card({ data }) {

    const { id, titulo, frase, imagenes } = data;

    return (
        <div className="container mx-auto p-4" key={id}>
            <div className="bg-white pb-4 rounded-lg shadow-xl">
                <img src={imagenes?.imagen}
                    alt={imagenes?.alt}
                    className="rounded w-full h-64 object-cover" />

                <h3 className="mt-2 line-clamp-2">{titulo}</h3>

                <p className="text-gray-600 mt-2 line-clamp-3">
                    {frase}
                </p>

                <div className="mt-4 mx-4 text-right">
                    <a className="text-blue-500 font-bold underline hover:text-blue-700"
                        href="/articulo-prueba"
                        target="_blank">
                        Leer más...
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;

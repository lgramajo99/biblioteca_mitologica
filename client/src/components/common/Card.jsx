function Card({ data }) {
    if (!data) return null;
    const { id, titulo, frase, imagenes } = data;

    return (
        <article className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col h-full" key={id}>
            <header>
                {imagenes && (<img
                    src={imagenes?.imagen || ''}
                    alt={imagenes?.alt || ''}
                    className="w-full h-64 object-cover overflow-hidden"
                />)}

                <h3 className="mt-2 line-clamp-2">{titulo}</h3>
                <p className="text-gray-600 mt-2 line-clamp-3">{frase}</p>
            </header>
            <footer className="text-right mt-auto py-1 px-2">
                <a className="text-blue-500 font-bold underline hover:text-blue-700 mb-auto"
                    href="/articulo-prueba"
                    rel="noopener noreferrer"
                    target="_blank">
                    Leer más...
                </a>
            </footer>
        </article>
    );
}


export default Card;

function Card() {

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white pb-4 rounded-lg shadow-xl">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAYMvRQ5nztxX0iM4vh1mrSkHjz8cilBU9A"
                    alt="Casco de un vikingo"
                    className="rounded w-full h-64 object-cover" />

                <h3 className="mt-2 line-clamp-2">Calavera con casco de vikingo</h3>

                <p className="text-gray-600 mt-2 line-clamp-3">
                    Esta impresionante calavera con un casco de vikingo es una obra de arte única que captura la esencia de la cultura vikinga y su valentía en la batalla. El casco adornado con cuernos y detalles intrincados muestra la artesanía detallada que se encuentra en esta representación. Esta pieza es un recordatorio de la rica historia y la mitología nórdica que sigue siendo fascinante en la actualidad.x.
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

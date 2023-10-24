function Card() {
    return (
        <div className="container mx-auto p-4">
            <div className="bg-white rounded-lg shadow-xl">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeAYMvRQ5nztxX0iM4vh1mrSkHjz8cilBU9A" alt="Casco de un vikingo" className="rounded w-full" />
                <h1 className="text-xl font-semibold mt-2">Calavera con casco de vikingo</h1>
                <p className="text-gray-600 mt-2 line-clamp-3">Esta impresionante calavera con un casco de vikingo es una obra de arte única que captura la esencia de la cultura vikinga y su valentía en la batalla. El casco adornado con cuernos y detalles intrincados muestra la artesanía detallada que se encuentra en esta representación. Esta pieza es un recordatorio de la rica historia y la mitología nórdica que sigue siendo fascinante en la actualidad.x.</p>

                <div className="mt-4">
                    <a href="#" target="_blank" className="text-blue-500">Leer mas</a>
                </div>
            </div>
        </div>
    );
}

export default Card;

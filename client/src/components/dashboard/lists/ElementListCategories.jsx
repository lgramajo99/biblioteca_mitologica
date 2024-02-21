function ElementListCategories({ data }) {
    const { name, count_post } = data

    return (
        <li className="flex justify-between items-center my-2 bg-red-300 rounded-lg shadow-lg p-2">
            <div>
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-sm">Cantidad de posts: {count_post}</p>
            </div>
            <div className="space-x-2">
                <button type="button" className="px-2 py-1 transition duration-300 transform hover:scale-110  focus:outline-none">Editar</button>
                <button type="button" className="px-2 py-1 transition duration-300 transform hover:scale-110  focus:outline-none">Eliminar</button>
                <button type="button" className="px-2 py-1 transition duration-300 transform hover:scale-110  focus:outline-none">Mostrar posts</button>
            </div>
        </li>
    );
}

export default ElementListCategories;

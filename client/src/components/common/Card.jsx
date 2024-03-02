import { NavLink } from 'react-router-dom';

function Card({ data }) {
    if (!data) return null;
    const { id, titulo, frase, imagenes } = data;

    return (
        <article className="bg-slate-200 dark:bg-black dark:text-darkTxt rounded-lg shadow-xl overflow-hidden flex flex-col h-full max-h-[420px]" key={id}>
            {imagenes && (<img
                src={imagenes?.imagen || ''}
                alt={imagenes?.alt || ''}
                className="w-full h-64 object-cover overflow-hidden"
            />)}

            <header className="p-2">
                <h3 className="text-center mt-2 line-clamp-1">{titulo}</h3>
                <p className=" text-start mt-2 line-clamp-3">{frase}</p>
            </header>
            <footer className="text-right mt-auto py-1 px-2">
                <NavLink className="text-blue-500 font-bold underline transition-colors duration-300 hover:text-darkSecondary mb-auto"
                    to={`/articulo/${id}`}
                    rel="noopener noreferrer"
                    target="_blank">
                    Leer más <span>&rarr;</span>
                </NavLink>
            </footer>
        </article>
    );
}


export default Card;

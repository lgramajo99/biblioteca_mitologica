import { useEffect, useMemo } from "react";
import Card from "../common/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/reducers/articleReducer";
import Loading from "../common/Loading";


function Manufactures({ seccion }) {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    const sortedData = useMemo(() => {
        if (seccion === 'Mas recientes') {
            return [...data].sort((a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion));
        } else if (seccion === 'Mas vistas') {
            return [...data].sort((a, b) => b.contador_vistas - a.contador_vistas);
        } else {
            return data;
        }
    }, [seccion, data]);


    return (
        <section>
            <h2 className="my-3">Publicaciones {seccion}</h2>

            {status === 'loading' && <Loading />}

            {status === 'succeeded' && (
                <article className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sortedData.map((cardData) => (
                        <Card key={cardData.id} data={cardData} />
                    ))}
                </article>
            )}

            {status === 'error' && <p>Error al cargar contenido: {error}</p>}

            <button className="my-3 font-bold py-2 px-4 rounded transition duration-300 ease-in-out border-2 border-secondary hover:bg-secondary">
                Ver mas articulos
            </button>
        </section >
    )
}

export default Manufactures;
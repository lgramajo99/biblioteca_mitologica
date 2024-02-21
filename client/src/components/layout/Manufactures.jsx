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
        } else if (seccion === 'Mas vistos') {
            return [...data].sort((a, b) => b.contador_vistas - a.contador_vistas);
        } else {
            return data;
        }
    }, [seccion, data]);


    return (
        <section className="mb-10">
            <h2>Seccion articulos: {seccion}</h2>

            {status === 'loading' && <Loading />}

            {status === 'succeeded' && (
                <article className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sortedData.map((cardData) => (
                        <Card key={cardData.id} data={cardData} />
                    ))}
                </article>
            )}

            {status === 'error' && <p>Error al cargar: {error}</p>}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Ver mas articulos
            </button>
        </section >
    )
}

export default Manufactures;
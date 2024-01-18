import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../redux/reducers/articleReducer";
import Loading from "./Loading";


function Manufactures({ seccion }) {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <section>
            <h2>Seccion articulos: {seccion}</h2>

            {status === 'loading' && <Loading />}

            {status === 'succeeded' && (
                <article className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {data.map((cardData) => (
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
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { fetchArticles } from "../../redux/reducers/articleReducer";
import ElementList from "../../components/admin/ElementList";

function Dashboard() {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);


    return (
        <div>
            <h1 className="text-center my-4">Bashboard de los BM</h1>

            {status === 'loading' && <Loading />}
            {status === 'succeeded' && (
                <article className="">
                    {data.map((cardData) => (
                        <ElementList key={cardData.id} data={cardData} />
                    ))}
                </article>
            )}
            {status === 'error' && <p>Error al cargar: {error}</p>}

        </div>
    )
}

export default Dashboard;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../redux/reducers/articleReducer";
import ElementListPosts from "../admin/ElementListPosts";

function DashboardContent() {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);


    return (
        <section className="bg-slate-300 container px-4 w-screen">
            <h1 className="text-center">Bashboard de los BM</h1>

            {/* {status === 'loading' && <Loading />} */}
            {status === 'succeeded' && (
                <article className="">
                    {data.map((cardData) => (
                        <ElementListPosts key={cardData.id} data={cardData} />
                    ))}
                </article>
            )}
            {/* {status === 'error' && <p>Error al cargar: {error}</p>} */}
        </section>
    )
}

export default DashboardContent;
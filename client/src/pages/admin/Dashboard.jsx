import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../components/Loading";
import { fetchArticles } from "../../redux/reducers/articleReducer";
import CardA from "../../components/admin/CardA";

function Dashboard() {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);


    return (
        <div>
            <h1>Bashboard de los BM</h1>


            {status === 'succeeded' && (
                <article className="">
                    {data.map((cardData) => (
                        <CardA key={cardData.id} data={cardData} />
                    ))}
                </article>
            )}
        </div>
    )
}

export default Dashboard;
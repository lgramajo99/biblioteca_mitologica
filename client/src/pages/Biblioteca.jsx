import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PandoraFilter from "../components/common/PandoraFilter";
import Card from "../components/common/Card";
import Loading from '../components/common/Loading';
import Pagination from "../components/common/Pagination";
import { fetchArticles } from "../redux/reducers/articleReducer";

function Biblioteca() {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    return (
        <section className="flex flex-col gap-y-2 p-2 dark:text-darkTxt">
            <h2 className="text-center">Biblioteca completa de Mitologia</h2>
            <PandoraFilter />
            {status === 'loading' && <Loading />}
            {status === 'succeeded' && (
                <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {data.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </section>
            )}
            {status === 'error' && <p>Error al cargar: {error}</p>}
            <Pagination />
        </section>
    );
}

export default Biblioteca;

import { useDispatch, useSelector } from "react-redux";
import PandoraFilter from "../components/PandoraFilter";
import { useEffect } from "react";
import { fetchArticles } from "../redux/reducers/articleReducer";
import Card from "../components/Card";

function Biblioteca() {
    const { data, status, error } = useSelector(state => state.article);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);

    console.log(data)

    return (<section>
        <h2>Biblioteca completa de Mitologia</h2>
        <PandoraFilter />

        <article className="bg-slate-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {data.map((e) => (<Card key={e.id} data={e} />))}
        </article>


    </section>)
}

export default Biblioteca;
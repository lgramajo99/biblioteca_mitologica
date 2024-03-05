import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../redux/reducers/articleIdReducer";
import Loading from "../components/common/Loading";

function ArticleContainer() {
    const { artId } = useParams();
    const dispatch = useDispatch();
    const { article, status, error } = useSelector(state => state.articleId);


    useEffect(() => {
        dispatch(fetchArticleById(artId));
    }, [dispatch, artId]);

    return (
        <section className="w-full h-screen p-3">
            {status === 'loading' && <Loading />}
            {status === 'succeeded' && (
                <article className="flex flex-col">
                    <span className="text-end">{article.fecha_creacion}</span>
                    <h2 className="text-center mb-4">{article.titulo}</h2>
                    <p>{article.frase}</p>
                    <img src={article.imagenes.imagen} alt={article.imagenes.alt} className="relative w-44" />
                </article>
            )}
        </section >
    );
}

export default ArticleContainer;

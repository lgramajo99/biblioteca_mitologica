import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../../redux/reducers/articleReducer";
import ElementListPosts from "../lists/ElementListPosts";
import Loading from "../../common/Loading";

function ListPost() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.article)

    useEffect(() => { dispatch(fetchArticles()); }, [dispatch])

    return (<ul>
        {status === 'loading' && <Loading />}
        {status === 'succeeded' && data.map((data) => (
            <ElementListPosts key={data.id} data={data} />
        ))}
        {status === 'error' && <h3>{error}</h3>}

    </ul>)
}

export default ListPost;
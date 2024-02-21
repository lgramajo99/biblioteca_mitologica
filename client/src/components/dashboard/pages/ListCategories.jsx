import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../redux/reducers/categoryReducer";
import ElementListCategories from "../lists/ElementListCategories";
import Loading from "../../common/Loading";

function ListCategories() {
    const dispatch = useDispatch();
    const { data, status, error } = useSelector(state => state.category)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    return (<ul>
        {status === 'loading' && <Loading />}
        {status === 'succeeded' && data.map((data) => (
            < ElementListCategories key={data.id} data={data} />
        ))
        }

    </ul>)
}

export default ListCategories;
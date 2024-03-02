import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../redux/reducers/categoryReducer";

function Asidebar() {
    const { data, status } = useSelector(state => state.category);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    console.log(data)
    return (
        <aside className="w-full hidden md:block md:w-3/12 lg:w-2/12 px-1 dark:bg-darkAcenture ">
            <h3>Lista de mitologias</h3>
            <ul className="text-start">
                {data.map((item) => (
                    <li className="list-disc truncate" key={item.id}>{item.name}</li>
                ))}
            </ul>
        </aside>)
}

export default Asidebar;
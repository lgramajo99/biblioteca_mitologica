import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, toggleSelectedCategory } from "../../redux/reducers/categoryReducer";
import { arrowDownLine, arrowUpLine } from "../../assets";

function PandoraFilter() {
    const [isOpen, setOpen] = useState(false);
    const { data, status, selectedCategories } = useSelector(state => state.category);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleFilterToggle = () => {
        setOpen(!isOpen);
    };

    const handleCheckboxChange = (id, name, count_post) => {
        dispatch(toggleSelectedCategory({ id, name, count_post }));
    };

    const viewSelected = () => {
        const numSelected = selectedCategories.length;

        if (numSelected === 0) { return "Todos"; }
        else if (numSelected === 1) { return selectedCategories[0].name; }
        else { return `Seleccionados[${numSelected}]`; }
    }

    return (
        <section className="dark:text-darkTxt ">
            <button
                type="button"
                className={`flex items-center gap-1 ${status === "loading" || status === "error" ? "cursor-not-allowed" : ""}`}
                onClick={handleFilterToggle}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls="tiposDropdown"
                id="tiposButton"
                disabled={status === "loading" || status === "error"}>

                <span><b>Tipos: </b>{viewSelected()}</span>
                <img src={isOpen ? arrowUpLine : arrowDownLine} className="w-5 h-5 filter dark:invert" alt="arrows line" />
            </button>

            {isOpen && (
                <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 p-2 rounded-md bg-lightComplement dark:bg-darkPrimary">
                    {data.map((item) => (
                        <Checkbox
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            onChange={(isChecked) => handleCheckboxChange(item.id, item.name, item.count_post, isChecked)}
                            isChecked={selectedCategories.some(category => category.id === item.id)}
                        />
                    ))}
                </ul>
            )}
        </section>
    );
}

function Checkbox({ id, name, onChange, isChecked }) {
    const handleChange = () => {
        onChange(!isChecked);
    };

    return (
        <li className="truncate">
            <a tabIndex="0">
                <label className="checkbox" htmlFor={id} id={`${id}-label`}>
                    <input type="checkbox"
                        id={id}
                        value={name}
                        name={name}
                        onChange={handleChange}
                        aria-labelledby={`${id}-label`}
                        checked={isChecked} />
                    {name}
                </label>
            </a>
        </li>
    );
}

export default PandoraFilter;
//  className={`flex items-center gap-1 ${status === "loading" || status === "error" ? "cursor-not-allowed" : ""}`}
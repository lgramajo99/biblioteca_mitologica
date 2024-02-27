// SearchForm.js
import { magnifyGlassLine } from "../../assets/index";

const SearchForm = () => {
    return (
        <form className="flex items-center border dark:border-darkSecondary overflow-hidden rounded-full">
            <label htmlFor="buscador" className="sr-only">
                Buscar:
            </label>
            <input type="text"
                className="py-3 px-3 dark:bg-transparent focus:outline-none border-transparent"
                id="buscador"
                name="buscador"
                placeholder="Buscar..." />

            <button type="submit"
                className="p-3">
                <img src={magnifyGlassLine} className="w-5 h-5 filter invert" alt="Lupa Buscador" />
            </button>
        </form>
    );
};

export default SearchForm;

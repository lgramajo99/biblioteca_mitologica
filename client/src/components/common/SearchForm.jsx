// SearchForm.js
import { magnifyGlassLine } from "../../assets/index";
import { useState } from "react";

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        // event.preventDefault();
        setSearchTerm('')
        console.log("Buscando:", searchTerm);
    }

    return (
        <form onSubmit={handleSubmit}
            className="flex items-center border dark:border-darkSecondary overflow-hidden rounded-full">
            <label htmlFor="buscador" className="sr-only">Buscar:</label>
            <input type="text"
                className="py-3 px-3 dark:bg-transparent focus:outline-none border-transparent"
                id="buscador"
                name="buscador"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            <button type="submit" aria-label="Buscar" className="p-3">
                <img src={magnifyGlassLine} className="w-5 h-5 filter dark:invert" alt="Lupa Buscador" />
            </button>
        </form>
    );
};

export default SearchForm;

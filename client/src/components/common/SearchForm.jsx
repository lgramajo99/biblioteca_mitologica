// SearchForm.js
import { magnifyGlassLine } from "../../assets/index";
import { useState } from "react";

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Buscando:", searchTerm);
        setSearchTerm('')
    }

    return (
        <form onSubmit={handleSubmit}
            className={`flex items-center border border-secondary overflow-hidden rounded-full ${searchTerm ? 'w-auto' : 'w-28 md:w-auto'}`}>
            <label htmlFor="buscador" className="sr-only">Buscar:</label>
            <input type="text"
                className="p-2 sm:px-3 dark:bg-transparent focus:outline-none border-transparent"
                id="buscador"
                name="buscador"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            <button type="submit" aria-label="Buscar" className="p-2 sm:px-3 ">
                <img src={magnifyGlassLine} className="w-5 h-5 filter dark:invert" alt="Lupa Buscador" />
            </button>
        </form>
    );
};

export default SearchForm;

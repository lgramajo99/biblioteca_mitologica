// SearchForm.js

const SearchForm = () => {
    return (
        <form className="flex items-center">
            <label htmlFor="buscador" className="sr-only">
                Buscar:
            </label>
            <input type="text"
                className="py-1 px-2 border border-gray-500 rounded-l appearance-none"
                id="buscador"
                name="buscador"
                placeholder="Buscar..." />

            <button type="submit"
                className="bg-blue-500 text-white py-1 px-2 rounded-r hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Buscar
            </button>
        </form>
    );
};

export default SearchForm;

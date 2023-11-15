// SearchForm.js

const SearchForm = () => {
    return (
        <form className="flex items-center">
            <input
                type="text"
                placeholder="Buscar..."
                className="p-2 border border-gray-500 rounded-l"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r"
            >
                Buscar
            </button>
        </form>
    );
};

export default SearchForm;

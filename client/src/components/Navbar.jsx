import SearchForm from './SearchForm';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Brand */}
                <div className="text-white font-bold text-xl">
                    B.M
                </div>

                {/* Search Form */}
                <div className="flex items-center justify-center flex-grow">
                    <SearchForm />
                </div>

                {/* Menu */}
                <div className="hidden md:flex space-x-4">
                    <a href="/" className="text-white">Inicio</a>
                    <a href="/directorio" className="text-white">Directorio</a>
                    <a href="/nosotros" className="text-white">Nosotros</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
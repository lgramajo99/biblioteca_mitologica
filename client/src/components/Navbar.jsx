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
                    <a href='#' className=''>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#ffffff" stroke-width="1.5" /> <circle cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5" /> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" /> </g>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
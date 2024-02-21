import SearchForm from '../common/SearchForm';
import { useSelector } from 'react-redux';
import { useAdminActions } from '../../redux/actions/adminAction';

const Navbar = () => {
    const isOpenLogin = useSelector(state => state.admin.openLogin);
    const { handleOpenLoginClick } = useAdminActions();

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
                    <a href="/biblioteca" className="text-white">Biblioteca</a>
                    <a href="/nosotros" className="text-white">Nosotros</a>
                    <a href='#' className='' onClick={handleOpenLoginClick}>
                        < svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier"> <circle cx="12" cy="9" r="3" stroke="#ffffff" strokeWidth="1.5" /> <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5" /> <path d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" /> </g>
                        </svg>
                    </a>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
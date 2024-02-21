import SearchForm from '../common/SearchForm';
import { useSelector } from 'react-redux';
import { useAdminActions } from '../../redux/actions/adminAction';
import { NavLink } from 'react-router-dom'
import { circleUser } from '../../assets';

const Navbar = () => {
    const { isAutenticated } = useSelector(state => state.auth)
    const { handleOpenLoginClick } = useAdminActions();

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="container mx-auto flex justify-between items-center">

                {/* Brand */}
                <li className="text-white font-bold text-xl">
                    B.M
                </li>

                {/* Search Form */}
                <li className="flex items-center justify-center flex-grow">
                    <SearchForm />
                </li>

                {/* Menu */}
                <li className="hidden md:flex space-x-4">
                    <NavLink to="/" className="text-white">Inicio</NavLink>
                    <NavLink to="/biblioteca" className="text-white">Biblioteca</NavLink>
                    <NavLink to="/nosotros" className="text-white">Nosotros</NavLink>

                    {!isAutenticated ?
                        <NavLink to='#' className='' onClick={handleOpenLoginClick}>
                            <img src={circleUser} alt="user-circle administracion" className='filter invert' />
                        </NavLink>
                        :
                        <NavLink to='/administracion' className="text-white">Admin</NavLink>
                    }
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;
import SearchForm from '../common/SearchForm';
import { useSelector } from 'react-redux';
import { useAdminActions } from '../../redux/actions/adminAction';
import { NavLink } from 'react-router-dom'
import { circleUser } from '../../assets';

const Navbar = () => {
    const { isAutenticated } = useSelector(state => state.auth)
    const { handleOpenLoginClick } = useAdminActions();

    return (
        <nav className="dark:bg-darkAcenture dark:text-darkTxt py-6">
            <ul className="container mx-auto flex justify-between items-center">

                {/* Brand */}
                <li className="font-bold text-xl">
                    B.M
                </li>

                {/* Search Form */}
                <li className="flex items-center justify-center flex-grow">
                    <SearchForm />
                </li>

                {/* Menu */}
                <li className="hidden md:flex space-x-4">
                    <NavLink className={'transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'} to="/">Inicio</NavLink>
                    <NavLink className={'transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'} to="/biblioteca">Biblioteca</NavLink>
                    <NavLink className={'transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'} to="/nosotros">Nosotros</NavLink>

                    {!isAutenticated ?
                        <NavLink to='#' className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white' onClick={handleOpenLoginClick}>
                            <img src={circleUser} alt="user-circle administracion" className='filter invert' />
                        </NavLink>
                        :
                        <NavLink className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white' to='/administracion'>Admin</NavLink>
                    }
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;
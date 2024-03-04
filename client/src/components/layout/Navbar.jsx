import SearchForm from '../common/SearchForm';
import { NavLink } from 'react-router-dom';
import { userCircleLine, doorOpen } from '../../assets/index';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuthActions } from '../../redux/actions/authAction'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isAuthenticated, isLoading } = useAuth0();
    const { handleLogin, handleLogout, isAdmin } = useAuthActions();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className='bg-lightPrimary dark:bg-darkPrimary dark:text-darkTxt py-6'>
            <section className='md:container mx-auto flex items-start md:items-center px-2 sm:px-0'>
                <article className='flex items-center justify-between w-9/12 md:w-7/12 pr-2'>
                    <span className='font-bold text-xl'>B.M</span>
                    <SearchForm />
                </article>

                <article className='w-3/12 sm:w-5/12 text-end'>
                    <button type='button' onClick={toggleMenu} className='md:hidden font-extrabold text-2xl'>
                        {!isMenuOpen ? '☰' : '✖'}
                    </button>
                    <ul className={`sm:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row gap-x-4 gap-y-2 justify-end`}>
                        <LinkItem text={'Inicio'} to={'/'} />
                        <LinkItem text={'Biblioteca'} to={'/biblioteca'} />
                        <LinkItem text={'Nosotros'} to={'/nosotros'} />

                        {isLoading ? (<span>Cargando...</span>) : isAuthenticated ? (
                            <>{isAdmin() && <NavLink to='/administracion' className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'>
                                Admin
                            </NavLink>}
                                <button type='button' className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white' onClick={handleLogout}>
                                    <img src={doorOpen} alt='logout' className='w-6 h-6 filter dark:invert ml-auto' />
                                </button></>
                        ) : (
                            <button type='button' className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white' onClick={handleLogin}>
                                <img src={userCircleLine} alt='login' className='w-6 h-6 filter dark:invert ml-auto' />
                            </button>
                        )}
                    </ul>
                </article>
            </section>
        </nav >
    );
};

export default Navbar;

function LinkItem({ text, to }) {
    return (
        <li>
            <NavLink to={to} className={'transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'}>
                {text}
            </NavLink>
        </li>
    );
}

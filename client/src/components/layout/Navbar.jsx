import SearchForm from '../common/SearchForm';
import { useSelector } from 'react-redux';
import { useAdminActions } from '../../redux/actions/adminAction';
import { NavLink } from 'react-router-dom';
import { userCircleLine } from '../../assets/index';
import { useState } from 'react';

const Navbar = () => {
    const { isAuthenticated } = useSelector(state => state.auth);
    const { handleOpenLoginClick } = useAdminActions();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='dark:bg-darkAcenture dark:text-darkTxt py-6'>
            <section className='container mx-auto flex items-start sm:items-center px-4 sm:px-0'>

                <article className='flex items-center justify-between w-9/12 sm:w-7/12 pr-2'>
                    <span className='font-bold text-xl'>B.M</span>
                    <SearchForm />
                </article>

                <article className='w-3/12 sm:w-5/12 text-end'>
                    <button type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden font-extrabold text-2xl'>
                        {!isMenuOpen ? '☰' : '✖'}
                    </button>

                    <ul className={`sm:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col sm:flex-row gap-x-4 gap-y-2 justify-end`}>
                        <LinkNavigation text={'Inicio'} to={'/'} />
                        <LinkNavigation text={'Biblioteca'} to={'/biblioteca'} />
                        <LinkNavigation text={'Nosotros'} to={'/nosotros'} />

                        {!isAuthenticated ?
                            <NavLink to='#' className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'
                                onClick={handleOpenLoginClick}>
                                <img src={userCircleLine} alt='user-circle-line login' className='w-6 h-6 filter dark:invert ml-auto ' />
                            </NavLink> :
                            <NavLink className='transition duration-300 ease-in-out hover:font-bold dark:hover:text-white' to='/administracion'>Admin</NavLink>
                        }
                    </ul>
                </article>
            </section>
        </nav >
    );
};

export default Navbar;

function LinkNavigation({ text, to }) {
    return (
        <li>
            <NavLink to={to}
                className={'transition duration-300 ease-in-out hover:font-bold dark:hover:text-white'}>
                {text}
                {/* <img className="md:hidden w-6 h-6 filter dark:invert" src={img} alt={text} /> */}
            </NavLink>
        </li>
    );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { flagHamburger } from '../../redux/actions/nav.actions';



function Nav() {
    const botonHamburger = useSelector(state => state.nav.botonHamburger);
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        // Dispatch your action to update the state here
        dispatch(flagHamburger());
    }


    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to='/inicio'>LOGO</Link>
            <div className={styles.menu}>
                <button className={styles.btnHamburguesa} onClick={handleHamburgerClick}>
                    <FontAwesomeIcon icon={botonHamburger ? faX : faBars} />
                </button>

                {botonHamburger &&

                    <ul className={styles.lista}>
                        <Link className={`${styles.link}`} to='/'><li>Inicio</li></Link>
                        <Link className={`${styles.link}`} to='/*'><li>Colección</li></Link>
                        <Link className={`${styles.link}`} to='/admin'><li>Administracion</li></Link>
                    </ul>
                }
            </div>
        </nav>
    )
}


export default Nav;
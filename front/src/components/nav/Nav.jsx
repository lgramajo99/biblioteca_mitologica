import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav() {
    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} to='/inicio'>LOGO</Link>
            <div className={styles.menu}>
                <button className={styles.btnHamburguesa}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <ul className={styles.lista}>
                    <Link className={`${styles.link}`} to='/'><li>Inicio</li></Link>
                    <Link className={`${styles.link}`} to='/*'><li>Colección</li></Link>
                    <Link className={`${styles.link}`} to='/admin'><li>Administracion</li></Link>
                </ul>
            </div>
        </nav>
    )
}


export default Nav;
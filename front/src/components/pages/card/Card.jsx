import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card() {
    let pruebaImg = 'https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg';

    return (<div className={styles.contenedor}>
        <img className={styles.imagen} src={pruebaImg} alt="Imagen de algo" />
        <footer className={styles.footer}>
            <Link to={'/#'} className={styles.nombre}>Nombre Egipcio</Link>
            <p className={styles.copete}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </footer>
    </div>)
}

export default Card;
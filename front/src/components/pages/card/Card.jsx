import styles from './Card.module.css'

function Card() {
    let pruebaImg = 'https://www.zooplus.es/magazine/wp-content/uploads/2022/05/Cuanto-pesa-un-gato-2.jpeg';

    return (<div className={styles.contenedor}>
        <img className={styles.imagen} src={pruebaImg} alt="Imagen de algo" />
        <h3 className={styles.nombre}>Nombre Egiptico</h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <button className={styles.botonEntrar} disabled="disabled">Entrar</button>
    </div>)
}


export default Card;
import Card from "../card/Card"
import styles from './Cards.module.css'

function Cards() {
    return (
        <div className={styles.contenedor}>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}


export default Cards;
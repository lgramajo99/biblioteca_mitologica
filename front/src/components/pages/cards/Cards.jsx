import Card from "../card/Card"
import styles from './Cards.module.css'

export default function Cards() {
    return (
        <div className={styles.contenedor}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
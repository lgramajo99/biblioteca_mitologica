import styles from './Home.module.css';
import Sidebar from "../Sidebar"
import Cards from "../cards/Cards"
export default function Home() {
    return (
        <section className={styles.home}>
            <Cards />
            <Sidebar />
        </section>
    )
}
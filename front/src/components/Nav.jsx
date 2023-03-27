import { Link } from "react-router-dom";


export default function Nav() {
    return (<div>
        <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/*'><li>Colección</li></Link>
            <Link to='/admin'><li>Administracion</li></Link>
        </ul>
    </div>)
}
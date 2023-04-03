import { Link } from "react-router-dom";

export default function Footer() {
    return (<div>
        <ul>
            <li><p>&copy;<code>Biblioteca Mitologica</code> Creado en Enero de 2023</p></li>
            <li><Link to="/">Acerca de Biblioteca Mitologica</Link></li>
            <li><Link to="/">Política de Privacidad</Link></li>
            <li><Link to="/">Categorias</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li><Link to="/">¿Encontró un error?</Link></li>
        </ul>
    </div>)
}
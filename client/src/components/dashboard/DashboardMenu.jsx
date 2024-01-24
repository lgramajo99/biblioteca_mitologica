import ElementBtnMenu from "./ElementBtnMenu";
import calendar from "../../assets/svg/calendar.svg"
import doorOpen from "../../assets/svg/door-open.svg"

import listUl from "../../assets/svg/list-ul.svg"
import menu from "../../assets/svg/menu.svg"

function DashboardMenu() {

    return (<div className="">

        <button type="button">
            <img src={menu} alt="menu" />
        </button>


        <ul>
            <h3>Biblioteca Mitologica</h3>
            <li><h4>Nombre Apellido/Usuario</h4></li>

            {/* Funcionalidades de control */}

            <ElementBtnMenu alt="listUl" txt="Control de usuario" />
            <ElementBtnMenu image={listUl} alt="listUl" txt="Listado de publicaciones" />
            <ElementBtnMenu image={listUl} alt="listUl" txt="Listado de categorias" />

            {/* Estadisticas y seguridad */}
            <ElementBtnMenu alt="listUl" txt="Estadisticas generales" />
            <ElementBtnMenu alt="listUl" txt="Registro de actividades" />

            {/* Funcionalidades generales y configuracion del sitio*/}
            <ElementBtnMenu image={calendar} alt="listUl" txt="Calendario" />
            <ElementBtnMenu image={doorOpen} alt="listUl" txt="Dark Mode" />
            <ElementBtnMenu alt="listUl" txt="Log Out" />

        </ul>

    </div >)
}

export default DashboardMenu;
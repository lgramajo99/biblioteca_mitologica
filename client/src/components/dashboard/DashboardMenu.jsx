import { useSelector } from "react-redux";
import { useAdminActions } from '../../redux/actions/adminAction';
import calendar from "../../assets/svg/calendar.svg"
import doorOpen from "../../assets/svg/door-open.svg"
import ElementBtnMenu from "./ElementBtnMenu";
import listUl from "../../assets/svg/list-ul.svg"
import menu from "../../assets/svg/menu.svg"
import users from "../../assets/svg/users.svg"

function DashboardMenu() {
    const { handleDisplayedMenu } = useAdminActions()
    const displayedMenu = useSelector(state => state.admin.displayedMenu)

    return (
        <nav className="bg-green-400 inline-block flex-col h-screen sticky">

            <button type="button" className="mx-1 p-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transform transition-transform hover:scale-95 active:scale-90" onClick={handleDisplayedMenu}>
                <img src={menu} alt="menu" />
            </button>

            <ul className="">
                <h3 className="text-center">{`${displayedMenu ? "Biblioteca Mitologica" : "B|M"}  `}</h3>

                {/* Funcionalidades de control */}
                <ElementBtnMenu alt="usuario" txt="Luciano G." />
                <ElementBtnMenu image={users} alt="control de usuario" txt="Control de usuario" />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de publicaciones" />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de categorias" />
                <br />

                {/* Estadisticas y seguridad */}
                <ElementBtnMenu alt="listUl" txt="Estadisticas generales" />
                <ElementBtnMenu alt="listUl" txt="Registro de actividades" />
                <br />

                {/* Funcionalidades generales y configuracion del sitio*/}
                <ElementBtnMenu image={calendar} alt="listUl" txt="Calendario" />
                <ElementBtnMenu alt="listUl" txt="Dark Mode" />
                <br />

                <ElementBtnMenu image={doorOpen} alt="listUl" txt="Log Out" />

            </ul>

        </nav >)
}

export default DashboardMenu;
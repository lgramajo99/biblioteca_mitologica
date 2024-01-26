import { useSelector } from "react-redux";
import { useAdminActions } from '../../redux/actions/adminAction';
import addFile from "../../assets/svg/add-file.svg"
import calendar from "../../assets/svg/calendar.svg"
import chartPie from "../../assets/svg/chart-pie.svg"
import doorOpen from "../../assets/svg/door-open.svg"
import ElementBtnMenu from "./ElementBtnMenu";
import listUl from "../../assets/svg/list-ul.svg"
import menu from "../../assets/svg/menu.svg"
import sun from "../../assets/svg/sun.svg"
import moon from "../../assets/svg/moon.svg"
import squarePoll from "../../assets/svg/square-poll.svg"
import users from "../../assets/svg/users.svg"

function DashboardMenu({ seccion }) {

    const { handleDisplayedMenu, handleThemeMode } = useAdminActions()
    const { displayedMenu, themeChangeMode } = useSelector(state => state.admin)

    return (
        <nav className={`fixed top-0 left-0 h-full bg-slate-500 shadow-md ${displayedMenu ? "w-80" : "w-20"} overflow-y-auto`} >

            <button type="button" className="mx-1 p-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transform transition-transform hover:scale-95 active:scale-90" onClick={handleDisplayedMenu}>
                <img src={menu} alt="menu" />
            </button>

            <ul>
                <h3 className="text-center">{`${displayedMenu ? "Biblioteca Mitologica" : "B|M"} `}</h3>
                {/* Funcionalidades de control */}
                <ElementBtnMenu alt="usuario" txt="Luciano G." />

                <ElementBtnMenu image={addFile} alt="Crear publicacion" txt="Crear Publicacion" to={"agregar-publicacion"} />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de publicaciones" to={"lista-publicacion"} />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de categorias" to={"lista-categoria"} />
                <br />

                {/* Estadisticas y seguridad */}
                <ElementBtnMenu image={users} alt="control de usuario" txt="Control de usuarios" to={"control-usuario"} />
                <ElementBtnMenu image={chartPie} alt="listUl" txt="Estadisticas generales" to={"estadisticas-generales"} />
                <ElementBtnMenu image={squarePoll} alt="listUl" txt="Registro de actividades" to={"registro-actividades"} />
                <br />

                {/* Funcionalidades generales y configuracion del sitio*/}
                <ElementBtnMenu image={calendar} alt="listUl" txt="Calendario" to={"calendario"} />
                <ElementBtnMenu image={themeChangeMode ? moon : sun} alt="Dark Mode" txt="Dark Mode" />
                <br />

                <ElementBtnMenu image={doorOpen} alt="listUl" txt="Log Out" />
            </ul>

        </nav >)
}

export default DashboardMenu;
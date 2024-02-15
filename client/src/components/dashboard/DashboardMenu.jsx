import { useSelector } from "react-redux";
import { useAdminActions } from '../../redux/actions/adminAction';
import ElementBtnMenu from "./ElementBtnMenu";
import { addFile, listUl, users, chartPie, squarePoll, calendar, doorOpen, menu, sun, moon } from "../../assets/index";

function DashboardMenu() {

    const { handleDisplayedMenu, handleThemeMode } = useAdminActions()
    const { displayedMenu, themeChangeMode } = useSelector(state => state.admin)

    return (
        <nav className={`fixed top-0 left-0 h-full bg-slate-500 shadow-md ${displayedMenu ? "w-80" : "w-20"} overflow-y-auto`} >

            <button type="button"
                className="mx-1 p-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transform transition-transform hover:scale-95 active:scale-90"
                onClick={handleDisplayedMenu}>

                <img src={menu} alt="menu" />
            </button>

            <ul>
                <h3 className="text-center">{`${displayedMenu ? "Biblioteca Mitologica" : "B|M"} `}</h3>
                {/* Funcionalidades de control */}
                <ElementBtnMenu alt="usuario" txt="Luciano G." />

                <ElementBtnMenu image={addFile} alt="Crear publicacion" txt="Crear Publicacion" to={"crear-publicacion"} />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de publicaciones" to={"lista-publicaciones"} />
                <ElementBtnMenu image={listUl} alt="listUl" txt="Lista de categorias" to={"lista-categorias"} />
                <br />

                {/* Estadisticas y seguridad */}
                <ElementBtnMenu image={users} alt="control de usuario" txt="Control de usuarios" to={"control-usuario"} />
                <ElementBtnMenu image={chartPie} alt="listUl" txt="Estadisticas generales" to={"estadisticas-generales"} />
                <ElementBtnMenu image={squarePoll} alt="listUl" txt="Registro de actividades" to={"registro-actividades"} />
                <br />

                {/* Funcionalidades generales y configuracion del sitio*/}
                <ElementBtnMenu image={calendar} alt="listUl" txt="Calendario" to={"calendario"} />
                {/* <ElementBtnMenu image={themeChangeMode ? moon : sun} alt="Dark Mode" txt="Dark Mode" /> */}

                <button type="button" className="flex px-2 py-1 items-center text-start w-full transition-colors duration-500 ease-in-out hover:bg-gray-600 focus:outline-none" onClick={handleThemeMode}>
                    <img src={themeChangeMode ? moon : sun} alt='Change mode' />
                    {displayedMenu && <span className="font-bold truncate">{themeChangeMode ? 'Dark Mode' : 'Light mode'}</span>}
                </button>

                <br />
                <ElementBtnMenu image={doorOpen} alt="listUl" txt="Log Out" />
            </ul>

        </nav >)
}

export default DashboardMenu;
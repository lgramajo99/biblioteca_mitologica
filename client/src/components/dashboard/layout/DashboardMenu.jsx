import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from "react-redux";
import { useAdminActions } from '../../../redux/actions/adminAction';
import ElementBtnMenu from "./ElementBtnMenu";
import { addSquareSolid, blankCalendarSolid, bulletListSolid, expandHorizontalSolid, graphSolid, logoutSolid, userIdentifierCardSolid, userMultipleGroupSolid, wrenchSolid } from "../../../assets/index";
import { useAuthActions } from "../../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import DarkModeSwitchButton from '../../common/DarkModeSwitchButton';

function DashboardMenu() {
    const { handleDisplayedMenu } = useAdminActions();
    const { handleLogin } = useAuthActions();
    const { displayedMenu } = useSelector(state => state.admin);
    const navigate = useNavigate()
    const { user, isAuthenticated } = useAuth0();
    
    return (
        <nav className={`fixed top-0 left-0 h-full p-2 bg-purple-700 dark:text-slate-300 dark:bg-darkPrimary shadow-md transition-all duration-500 ${displayedMenu ? "w-80" : "w-20"} overflow-y-auto`} >

            <button type="button"
                className="mx-1 p-1 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 transform transition-transform hover:scale-95 active:scale-90"
                onClick={handleDisplayedMenu}>
                <img src={expandHorizontalSolid} className={`w-10 h-10 filter dark:invert`} alt="menu" />
            </button>

            <ul className="overflow-hidden gap-y-2 flex flex-col">
                <button
                    type="button"
                    className="w-full px-2 py-1 font-semibold transition-colors duration-300 ease-in-out rounded-md focus:outline-none focus:text-white hover:text-white overflow-hidden whitespace-nowrap"
                    onClick={() => navigate(`/`)}
                >
                    {displayedMenu ? "Biblioteca Mitologica" : "B|M"}
                </button>

                <ElementBtnMenu image={userIdentifierCardSolid} alt="usuario" txt="Luciano G." to={"mi-perfil"} />

                <ElementBtnMenu image={addSquareSolid} alt="Crear publicacion" txt="Crear Publicacion" to={"crear-publicacion"} />
                <ElementBtnMenu image={bulletListSolid} alt="listUl" txt="Lista de publicaciones" to={"lista-publicaciones"} />
                <ElementBtnMenu image={bulletListSolid} alt="listUl" txt="Lista de categorias" to={"lista-categorias"} />
                <br />

                <ElementBtnMenu image={userMultipleGroupSolid} alt="control de usuario" txt="Control de usuarios" to={"control-usuario"} />
                <ElementBtnMenu image={graphSolid} alt="listUl" txt="Estadisticas generales" to={"estadisticas-generales"} />
                <ElementBtnMenu image={wrenchSolid} alt="listUl" txt="Registro de actividades" to={"registro-actividades"} />
                <ElementBtnMenu image={blankCalendarSolid} alt="listUl" txt="Calendario" to={"calendario"} />
                <DarkModeSwitchButton />
                <br />
                <button type="button"
                    onClick={handleLogin}
                    className={`flex items-center w-full rounded-xl py-1 px-2 gap-2 transition duration-300 ease-in-out focus:font-bold focus:outline-none hover:font-bold hover:bg-purple-200 focus:bg-purple-200 dark:text-darkTxt dark:hover:bg-darkSecondary dark:focus:bg-darkSecondary ${displayedMenu ? 'justify-start' : 'justify-center'}`}>
                    <img src={logoutSolid} alt='door open' className={`w-6 h-6 filter dark:invert`} />
                    {displayedMenu && <span className="font-bold truncate">Cerrar sesión</span>}
                </button>

            </ul>

        </nav >
    );
}

export default DashboardMenu;

//adminAction
import { adminActions } from "../reducers/adminReducer";
import { useDispatch } from "react-redux";


export const toggleHTMLDarkMode = () => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark');

    const isDarkModeEnabled = htmlElement.classList.contains('dark');
    localStorage.setItem('darkModeEnabled', JSON.stringify(isDarkModeEnabled));
};
export const loadDarkModeFromLocalStorage = () => {
    // Obtener el estado del modo oscuro desde el localStorage
    const darkModeEnabled = JSON.parse(localStorage.getItem('darkModeEnabled'));

    // Verificar si el modo oscuro está habilitado
    if (darkModeEnabled) {
        // Aplicar el modo oscuro al elemento HTML
        document.querySelector('html').classList.add('dark');
    }
}

export const useAdminActions = () => {
    const dispatch = useDispatch();

    const handleOpenLoginClick = () => {
        dispatch(adminActions.toggleOpenLogin());
    };

    const handleDisplayedMenu = () => {
        dispatch(adminActions.toggleDisplayedMenu())
    }

    const handleThemeMode = () => {
        dispatch(adminActions.toggleThemeMode());
        toggleHTMLDarkMode();
    }

    return {
        handleOpenLoginClick,
        handleDisplayedMenu,
        handleThemeMode,
        // Otras acciones si es necesario
    };
};
//adminAction
import { adminActions } from "../reducers/adminReducer";
import { useDispatch } from "react-redux";


export const toggleHTMLDarkMode = () => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark');
};

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
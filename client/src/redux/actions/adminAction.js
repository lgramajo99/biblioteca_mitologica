//adminAction
import { adminActions } from "../reducers/adminReducer";
import { useDispatch } from "react-redux";


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
    }

    return {
        handleOpenLoginClick,
        handleDisplayedMenu,
        handleThemeMode,
        // Otras acciones si es necesario
    };
};
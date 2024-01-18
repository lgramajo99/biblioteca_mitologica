//adminAction
import { adminActions } from "../reducers/adminReducer";
import { useDispatch } from "react-redux";


export const useAdminActions = () => {
    const dispatch = useDispatch();

    const handleOpenLoginClick = () => {
        dispatch(adminActions.toggleOpenLogin());
    };

    return {
        handleOpenLoginClick,
        // Otras acciones si es necesario
    };
};
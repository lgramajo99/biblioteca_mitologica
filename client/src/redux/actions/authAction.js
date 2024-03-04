// authAction.js
import { authActions } from "../reducers/authReducer";
import { useDispatch } from "react-redux";
import { useAuth0, } from '@auth0/auth0-react';

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();

    const handleLogin = () => { loginWithRedirect(); }

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
        dispatch(authActions.logOut());
        console.info("Deslogeado");
    };

    const isAdmin = () => {
        const sub = "auth0|65e3aafb4e77a98cce0a138b"
        return (sub === user?.sub);
    }

    if (!isAuthenticated && !isLoading) { dispatch(authActions.loginFailure()); }
    else if (isAuthenticated) {
        dispatch(authActions.loginSuccess(user));
        console.log(user)
    }

    return {
        handleLogin,
        handleLogout,
        isAdmin,
    };
};
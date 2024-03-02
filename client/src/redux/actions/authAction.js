// authAction.js
import { authActions } from "../reducers/authReducer"; // Asegúrate de que el camino sea correcto.
import { useDispatch } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';

export const useAuthActions = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, isLoading, user, loginWithRedirect, logout } = useAuth0();

    const handleLogin = () => { loginWithRedirect(); }

    const handleLogout = () => {
        logout({ returnTo: window.location.origin });
        dispatch(authActions.logOut());
        console.info("Deslogeados");
    };

    if (!isAuthenticated && !isLoading) { dispatch(authActions.loginFailure()); }
    else if (isAuthenticated) { dispatch(authActions.loginSuccess(user)); }

    return {
        handleLogin,
        handleLogout,
    };
};


//    const verifyCredentials = async ({ email, password }) => { const verify = { email: 'lucianogramajo@gmail.com', password: 'asd123', isAdmin: true, user: 'Luciano' }; return verify.email === email && verify.password === password ? verify : null;};

// const handleLogin = async ({ email, password }) => {
//     try {
//         const user = await verifyCredentials({ email, password });
//         if (user) {
//             dispatch(authActions.loginSuccess({ email: user.email, user: user.user }));
//             console.info("Autenticación exitosa");
//             return { email: user.email, user: user.user };
//         } else {
//             dispatch(authActions.loginFailure());
//             console.error("Credenciales incorrectas");
//             return null;
//         }
//     } catch (error) {
//         console.error("Error de autenticación:", error);
//         dispatch(authActions.loginFailure());
//         return null;
//     }
// };
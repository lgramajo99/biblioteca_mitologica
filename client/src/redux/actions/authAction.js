import { authActions } from "../reducers/authReducer";
import { useDispatch } from "react-redux";

export const useAuthActions = () => {
    const dispatch = useDispatch();


    const verifyCredentials = async ({ email, password }) => {
        const verify = {
            email: 'lucianogramajo@gmail.com',
            password: 'asd123',
            isAdmin: true,
            user: 'Luciano'
        };

        return verify.email === email && verify.password === password ? verify : null;
    };


    const login = async ({ email, password }) => {
        try {
            const user = await verifyCredentials({ email, password });
            if (user) {
                dispatch(authActions.loginSuccess({ email: user.email, user: user.user }));
                console.info("Autenticación exitosa");
                return { email: user.email, user: user.user };
            } else {
                dispatch(authActions.loginFailure());
                console.error("Credenciales incorrectas");
                return null;
            }
        } catch (error) {
            console.error("Error de autenticación:", error);
            dispatch(authActions.loginFailure());
            return null;
        }
    };

    const logout = () => {
        dispatch(authActions.logOut());
        console.info("Deslogeados");
    };

    return {
        login,
        logout,
    };
};

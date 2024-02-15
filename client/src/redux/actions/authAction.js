import { authActions } from "../reducers/authReducer";
import { useDispatch } from "react-redux";

export const useAuthActions = () => {
    const dispatch = useDispatch();

    const login = async ({ email, password }) => {
        const verify = {
            email: 'lucianogramajo@gmail.com',
            password: 'asd123',
            user: 'Luciano'
        };

        try {
            if (email === verify.email && password === verify.password) {
                dispatch(authActions.loginSuccess({ email: verify.email, user: verify.user, password: verify.password }));
                return { email: verify.email, user: verify.user };
            } else {
                dispatch(authActions.loginFailure());
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

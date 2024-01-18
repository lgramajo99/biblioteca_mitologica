import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAutenticated: false,
    user: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAutenticated = true;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.isAutenticated = false;
            state.user = null;
        },
        logOut: (state) => {
            state.isAutenticated = false;
            state.user = null
        }
    }
})


export const { actions: authActions, reducer: authReducer } = authSlice;
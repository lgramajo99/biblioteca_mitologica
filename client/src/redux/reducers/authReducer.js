// authReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: {
        email: null,
    },
    roles: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.email;
            state.roles = action.payload.sub;
        },
        loginFailure: (state) => {
            state.isAuthenticated = false;
            state.user = { email: null };
            state.roles = ''
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = { email: null };
            state.roles = ''
        }
    }
})

export const { actions: authActions, reducer: authReducer } = authSlice;
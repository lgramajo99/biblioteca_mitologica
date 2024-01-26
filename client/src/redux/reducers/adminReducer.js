// adminReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openLogin: true,
    displayedMenu: true,
    themeChangeMode: true, // true es claro | false es oscuro
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        toggleOpenLogin: (state) => {
            state.openLogin = !state.openLogin;
        },
        toggleDisplayedMenu: (state) => {
            state.displayedMenu = !state.displayedMenu;
        },
        toggleThemeMode: (state) => {
            state.themeChangeMode = !state.themeChangeMode;
        }
    },
});

export const { actions: adminActions, reducer: adminReducer } = adminSlice;

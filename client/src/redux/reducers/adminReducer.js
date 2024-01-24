// adminReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openLogin: true,
    displayedMenu: true,
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
        }
    },
});

export const { actions: adminActions, reducer: adminReducer } = adminSlice;

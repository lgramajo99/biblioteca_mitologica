// adminReducer.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    openLogin: true,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        toggleOpenLogin: (state) => {
            state.openLogin = !state.openLogin;
        },
    },
});

export const { actions: adminActions, reducer: adminReducer } = adminSlice;

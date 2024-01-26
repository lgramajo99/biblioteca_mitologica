import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import dbMitologias from '../../data/dbMitologias.json';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const data = dbMitologias;
        return data;

    } catch (error) {
        console.error('Error al recuperar categorias de la API: ', error);
        throw isRejectedWithValue('No se pudieron recuperar los artículos.', null, { meta: 'additional information' });
    }
})

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })

    },
})

export const { reducer: categoryReducer } = categorySlice;
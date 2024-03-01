import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import dbMythologies from '../../data/dbMythologies.json';

export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const data = dbMythologies;
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
    selectedCategories: []
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        toggleSelectedCategory: (state, action) => {
            const { id, name, count_post } = action.payload;
            const index = state.selectedCategories.findIndex(category => category.id === id);

            if (index === -1) {
                state.selectedCategories.push({ id, name, count_post });
            } else {
                state.selectedCategories = state.selectedCategories.filter(category => category.id !== id);
            }
        }
    },
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
export const { toggleSelectedCategory } = categorySlice.actions;
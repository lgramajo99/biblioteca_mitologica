import { createSlice, createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import dbCards from '../../data/dbCards.json'


export const fetchArticles = createAsyncThunk('article/fetchArticles', async () => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Usamos dbCards como fuente de datos temporal
        const data = dbCards;
        return data;

    } catch (error) {
        console.error('Error al recuperar artículos de la API:', error);
        throw isRejectedWithValue('No se pudieron recuperar los artículos.', null, { meta: 'additional information' });

    }
});

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload ;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            })
    }
})

export const { reducer: articleReducer } = articleSlice;

// Selectores
// export const selectArticlesByDate = state => state.article.articles.sort((a, b) => new Date(a.fecha_creacion) - new Date(b.fecha_creacion));
// export const selectArticlesByViews = state => state.article.articles.sort((a, b) => b.contador_vistas - a.contador_vistas);
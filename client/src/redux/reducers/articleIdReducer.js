// articleDetailsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dbCards from '../../data/dbCards.json';

export const fetchArticleById = createAsyncThunk('articleDetails/fetchArticleById', async (artId, thunkAPI) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const article = dbCards.find(article => article.id === artId);

        if (!article) {
            throw new Error('Artículo no encontrado');
        }

        return article;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

const initialState = {
    article: null,
    status: 'idle',
    error: null,
};

const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchArticleById.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.article = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.payload;
            });
    },
});

export default articleDetailsSlice.reducer;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;

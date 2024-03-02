// rootReducer.js
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/adminReducer';
import { articleReducer } from './reducers/articleReducer';
import { categoryReducer } from './reducers/categoryReducer';
import counterReducer from './reducers/counterReducer';
import { authReducer } from './reducers/authReducer';
import articleIdReducer from './reducers/articleIdReducer';

const rootReducer = combineReducers({
    admin: adminReducer,
    article: articleReducer,
    auth: authReducer,
    counter: counterReducer,
    category: categoryReducer,
    articleId: articleIdReducer,
});

export default rootReducer;

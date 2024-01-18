// rootReducer.js
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/adminReducer';
import { articleReducer } from './reducers/articleReducer';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
    admin: adminReducer,
    article: articleReducer,
    counter: counterReducer,
});

export default rootReducer;

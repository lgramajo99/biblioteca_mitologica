// rootReducer.js
import { combineReducers } from 'redux';
import { adminReducer } from './reducers/adminReducer';

const rootReducer = combineReducers({
    admin: adminReducer,

});

export default rootReducer;

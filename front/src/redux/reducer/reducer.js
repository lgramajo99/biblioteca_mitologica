import { combineReducers } from 'redux';
import navReducer from './nav.reducer';

const rootReducer = combineReducers({
    nav: navReducer,

})

export default rootReducer
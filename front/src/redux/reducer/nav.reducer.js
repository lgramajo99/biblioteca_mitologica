import { FLAG_HAMBURGER } from "../action-types";

const initialState = {
    botonHamburger: false
}


function navReducer(state = initialState, action) {
    switch (action.type) {
        case FLAG_HAMBURGER:
            return { ...state, botonHamburger: !state.botonHamburger };
        default:
            return state;
    }
}

export default navReducer;
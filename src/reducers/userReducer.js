import { 
    SET_USER_LOADER,
    SET_USER_DATA
 } from '../constants';

const INITIAL_STATE = {
    userLoading: false,
    userData:{}
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_USER_LOADER:
            return {
                ...state,
                userLoading: payload
            }
        case SET_USER_DATA:
            return {
                ...state,
                userData: payload
            }
        default:
            return state
    }
}
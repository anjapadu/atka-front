import { 
    SET_LIST_SERVICES,
    SET_LOADER_SERVICE,
    SET_SELECTED_SERVICE
 } from '../constants';

const INITIAL_STATE = {
    loaderService: false,
    selectedService:{},
    listServices:[]
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_LIST_SERVICES:
            return {
                ...state,
                loaderService: payload
            }
        case SET_LOADER_SERVICE:
            return {
                ...state,
                selectedService: payload
            }
        case SET_SELECTED_SERVICE:
            return{
                ...state,
                listServices:payload
            }
        default:
            return state
    }
}
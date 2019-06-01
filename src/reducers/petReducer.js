import { 
    SET_LIST_PET,
    SET_PET_SELECTED,
    SET_PET_LOADER,
 } from '../constants';

const INITIAL_STATE = {
    loaderPet: false,
    selectedPet:{},
    listPet:[]
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_LIST_PET:
            return {
                ...state,
                listPet: payload
            }
        case SET_PET_SELECTED:
            return {
                ...state,
                selectedPet: payload
            }
        case SET_PET_LOADER:
            return{
                ...state,
                loaderPet:payload
            }
        default:
            return state
    }
}
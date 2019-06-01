import {
    FECTH_LIST_PETS,
    FECTH_SELECTED_PET
} from '../constants';

export const fetchListPet = (payload) => ({
    type: FECTH_LIST_PETS,
    payload
})

export const fetchSelectedPet = (payload) => ({
    type: FECTH_SELECTED_PET,
    payload
})


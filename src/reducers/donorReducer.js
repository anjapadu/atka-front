import { 
    SET_DONOR_DATA,
    SET_DONOR_LOADER
} from '../constants';

const INITIAL_STATE = {
    listDonor: [],
    loaderDonor:false,
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case SET_DONOR_DATA:
            return {
                ...state,
                listDonor: payload
            }
        case SET_DONOR_LOADER:
            return {
                ...state,
                loaderDonor: payload
            }
        default:
            return state
    }
}
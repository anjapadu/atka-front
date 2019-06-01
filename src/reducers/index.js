import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import userReducer from './userReducer';
import donorReducer from './donorReducer';
import petReducer from './petReducer';
import servicesReducer from './servicesReducer';

export default (history) => combineReducers({
    router: connectRouter(history),
    userS:userReducer,
    donorS:donorReducer,
    petS:petReducer,
    servicesS:servicesReducer
}); 
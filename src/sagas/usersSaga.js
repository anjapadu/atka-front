import {
    takeLatest,
    call,
    put,
} from 'redux-saga/effects';
import {
    FETCH_LOGIN
} from '../constants'
function* loginF({ payload }) {
    try {
        console.log(payload)
        // yield put({
        //     type: SET_USERS_LOADER,
        //     payload: true
        // })
        // const response = yield call(fetchUsers, payload);
        // yield put({
        //     type: SET_USERS,
        //     payload: response.data.data.parseUsers()
        // })

    } catch (e) {
        console.log('Error loginF', e)
    }
}

export default  [
    takeLatest(FETCH_LOGIN, loginF),
]
import { all } from 'redux-saga/effects';
import app from './app';
import usersSaga from './usersSaga';

export default function* rootSaga() {
    yield all([
        ...app,
        ...usersSaga
    ])
}
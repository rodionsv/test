import { takeEvery, put } from 'redux-saga/effects';
import { CREATE_HISTORY_ITEM } from './history/types';
import { dismissLoader, showLoader } from './app/actions';

export function* sagaWatcher() {
    yield takeEvery(CREATE_HISTORY_ITEM, sagaWorker);
}

function* sagaWorker() {
    try {
        yield put(showLoader());
        yield put(dismissLoader());
    } catch (e) {
        yield put(dismissLoader());
    }
}

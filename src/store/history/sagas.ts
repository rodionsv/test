import { takeEvery, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { FetchImage } from 'shared/interfaces/fetch-image';
import { ADD_IMAGE, FETCH_IMAGE, SET_LAST_IMAGE } from './types';
import { dismissLoader, showLoader } from '../app/actions';
import { Urls } from '../../constants/urls';
import { StorageNames } from '../../constants/storages';
import StorageWorker from '../../shared/helpers/storage-worker';
import { Image } from '../../shared/interfaces/image';

export function* sagaWatcher() {
    yield takeEvery(FETCH_IMAGE, sagaWorker);
}

const fetchImage = async (): Promise<Response> => {
    const response = await fetch(Urls.RANDOM_IMG);
    return await response.json();
};

// function for create interfaces with the necessary data
const constructImage = (response: FetchImage): Image => {
    return <Image>{
        id: response.data.id,
        url: response.data.image_url,
        name: response.data.title,
        date: new Date(),
    };
};

function* sagaWorker(): SagaIterator {
    try {
        yield put(showLoader());
        const payload = yield call(fetchImage);
        const image = yield call(() => constructImage(payload));
        let images = StorageWorker.get(StorageNames.LOCAL_STORAGE, 'history', 'images');
        if (!images) images = [];
        images.push(image);
        StorageWorker.set(StorageNames.LOCAL_STORAGE, 'history', 'images', images);
        yield put({ type: SET_LAST_IMAGE, payload: image });
        yield put({ type: ADD_IMAGE, payload: image });
    } finally {
        yield put(dismissLoader());
    }
}

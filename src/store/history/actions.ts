import {
    ADD_IMAGE,
    FETCH_IMAGE,
    REMOVE_IMAGE,
    REMOVE_LAST_IMAGE,
    SET_IMAGES,
    SET_LAST_IMAGE,
    UPDATE_IMAGE,
} from './types';
import { NewAction } from '../../shared/interfaces/new-action';
import { Image } from '../../shared/interfaces/image';
import StorageWorker from '../../shared/helpers/storage-worker';
import { StorageNames } from '../../constants/storages';

export const fetchImage = (): NewAction<void> => {
    return {
        type: FETCH_IMAGE,
    } as const;
};

export const addImage = (): NewAction<void> => {
    return {
        type: ADD_IMAGE,
    } as const;
};

export const setCurrentImage = (): NewAction<string | number> => {
    return {
        type: SET_LAST_IMAGE,
    } as const;
};

export const removeCurrentImage = (): NewAction<string | number> => {
    return {
        type: REMOVE_LAST_IMAGE,
    } as const;
};

export const removeImage = (id: string | number): NewAction<string | number> => {
    const images = StorageWorker.get(StorageNames.LOCAL_STORAGE, 'history', 'images');
    if (!!images && images.length) {
        const idx = images.findIndex((image: Image) => image.id === id);
        images.splice(idx, 1);
        StorageWorker.set(StorageNames.LOCAL_STORAGE, 'history', 'images', images);
    }
    return {
        type: REMOVE_IMAGE,
        payload: id,
    } as const;
};

export const setImages = (images: Image[]): NewAction<Image[]> => {
    return {
        type: SET_IMAGES,
        payload: images,
    } as const;
};

export const updateImage = (image: Image): NewAction<Image> => {
    return {
        type: UPDATE_IMAGE,
        payload: image,
    } as const;
};

export type HistoryActionTypes =
    | ReturnType<typeof fetchImage>
    | ReturnType<typeof addImage>
    | ReturnType<typeof setCurrentImage>
    | ReturnType<typeof removeCurrentImage>
    | ReturnType<typeof removeImage>
    | ReturnType<typeof setImages>
    | ReturnType<typeof updateImage>;

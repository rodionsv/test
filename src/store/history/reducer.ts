import {
    ADD_IMAGE,
    FETCH_IMAGE,
    REMOVE_IMAGE,
    REMOVE_LAST_IMAGE,
    SET_IMAGES,
    SET_LAST_IMAGE,
    UPDATE_IMAGE,
} from './types';
import { HistoryActionTypes } from './actions';
import { Image } from '../../shared/interfaces/image';

export interface HistorySate {
    images: Image[];
    fetchedImages: Array<unknown>;
    currentImage?: Image;
}

const initialState = {
    images: [],
    fetchedImages: [],
};

export const historyReducer = (state = initialState, action: HistoryActionTypes) => {
    switch (action.type) {
        case SET_IMAGES:
            return { ...state, images: action.payload };
        case FETCH_IMAGE:
            return { ...state, fetchedImages: [...state.fetchedImages, action.payload] };
        case ADD_IMAGE:
            return { ...state, images: [...state.images, action.payload] };
        case SET_LAST_IMAGE:
            return { ...state, currentImage: action.payload };
        case UPDATE_IMAGE:
            return {
                ...state,
                images: state.images.map((image: Image) =>
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    image.id === action.payload?.id ? { ...image, src: action.payload.src } : image,
                ),
            };
        case REMOVE_LAST_IMAGE:
            return { ...state, currentImage: undefined };
        case REMOVE_IMAGE:
            return {
                ...state,
                images: state.images.filter((item: Image) => item.id !== action.payload),
            };
        default:
            return state;
    }
};
